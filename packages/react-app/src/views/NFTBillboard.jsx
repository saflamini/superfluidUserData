import { SyncOutlined } from "@ant-design/icons";
import { utils } from "ethers";
import { Button, Card, DatePicker, Divider, Input, List, Progress, Slider, Spin, Switch } from "antd";
import React, { useState } from "react";
import { Address, Balance } from "../components";

export default function NFTBillboard({
  message,
  billboardOwner,
  purpose,
  setPurposeEvents,
  address,
  mainnetProvider,
  localProvider,
  yourLocalBalance,
  price,
  tx,
  readContracts,
  writeContracts,
}) {
  const [newPurpose, setNewPurpose] = useState("loading...");

  return (
    <div>
      {/*
        ⚙️ Here is an example UI that displays and sets the purpose in your smart contract:
      */}
      <div style={{ border: "1px solid #cccccc", padding: 16, width: 400, margin: "auto", marginTop: 64 }}>
        <h1>NFT Billboard</h1>
        <h2>Message: <b>{message}</b></h2>
        <Divider />
        <div style={{ margin: 8 }}>
            <h3>Owner:</h3>
            <h4>
                <Address address={billboardOwner} />
            </h4>
        </div>
                
      </div>


      <div style={{ width: 600, margin: "auto", marginTop: 32, paddingBottom: 256 }}>
      
      Billboard Contract Address:
        <Address
          address={readContracts && readContracts.TradeableCashflow ? readContracts.TradeableCashflow.address : null}
          ensProvider={mainnetProvider}
          fontSize={16}
        />

      </div>
    </div>
  );
}
