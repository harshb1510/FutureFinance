import axios from "axios";
import React, { useState } from "react";
const cbor = require('cbor-js')


const Fingerprint = () => {
  const handleYesClick = async () => {
    try {
      const publicKeyCredentialCreationOptions = {
        challenge: Uint8Array.from((c) => c.charCodeAt(0)),
        rp: {
          name: "FutureFinance",
          id: "localhost",
        },
        user: {
          id: Uint8Array.from("harsh"),
          name: "Harsh",
          displayName: "Harsh",
        },
        pubKeyCredParams: [
          { type: "public-key", alg: -7 },
          { type: "public-key", alg: -257 },
        ],
        authenticatorSelection: {
          authenticatorAttachment: "platform",
        },
        timeout: 60000,
        attestation: "direct",
      };

      const credential = await navigator.credentials.create({
        publicKey: publicKeyCredentialCreationOptions ,
      });

      console.log(credential.response);

      const utf8Decoder = new TextDecoder("utf-8");
      const decodedClientData = utf8Decoder.decode(
        credential.response.clientDataJSON
      );

      const clientDataObj = JSON.parse(decodedClientData);

      console.log(clientDataObj);


      const decodedAttestationObj = cbor.decode(
        credential.response.attestationObject);
    
       console.log(decodedAttestationObj);

       const {authData} = decodedAttestationObj;

// get the length of the credential ID
const dataView = new DataView(
    new ArrayBuffer(2));
const idLenBytes = authData.slice(53, 55);
idLenBytes.forEach(
    (value, index) => dataView.setUint8(
        index, value));
const credentialIdLength = dataView.getUint16();

// get the credential ID
const credentialId = authData.slice(
    55, 55 + credentialIdLength);

// get the public key object
const publicKeyBytes = authData.slice(
    55 + credentialIdLength);

// the publicKeyBytes are encoded again as CBOR
const publicKeyObject = cbor.decode(
    publicKeyBytes.buffer);
console.log(publicKeyObject)
   console.log(publicKeyBytes)
   console.log(credentialId);


      await axios.post("http://localhost:8080/api/fingerprint", credential.response);

      console.log("Credential sent");
    } catch (error) {
      console.error(error);
    }
  };

  const handleNoClick = () => {
    console.log("Fingerprint will not be added.");
  };
  return (
    <div>
      <p>Do you want to add the fingerprint?</p>
      <button onClick={handleYesClick}>Yes</button>
      <button onClick={handleNoClick}>NO</button>
    </div>
  );
};

export default Fingerprint;
