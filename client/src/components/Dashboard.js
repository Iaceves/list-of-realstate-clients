import { useEffect, useState } from "react";
import ContractAssign from "./ContractAssign";
import Seller from "./Seller";
import Agent from "./Agent";
import AgentForm from "./AgentForm";
import ContractAssignForm from "./ContractAssignForm";

function Dashboard() {
  const [contracts, setContracts] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetch("/contracts")
      .then((r) => r.json())
      .then((data) => setContracts(data));
  }, []);

  useEffect(() => {
    fetch("/agents")
      .then((r) => r.json())
      .then((data) => setAgents(data));
  }, []);

  useEffect(() => {
    fetch("/sellers")
      .then((r) => r.json())
      .then((data) => setSellers(data));
  }, []);

  const contractsToRender = contracts.map((contract) => {
    return (
      <ContractAssign
        key={contract.id}
        id={contract.id}
        agent={contract.agent}
        seller={contract.seller}
        price={contract.price}
      />
    );
  });

  const agentToRender = agents.map((agent) => (
    <Agent
      key={agent.id}
      id={agent.id}
      name={agent.name}
      company={agent.company}
      license_number={agent.license_number}
      agents={agents}
      setAgents={setAgents}
    />
  ));

  const sellerToRender = sellers.map((seller) => (
    <Seller
      key={seller.id}
      id={seller.id}
      name={seller.name}
      address={seller.address}
      phone_number={seller.phone_number}
    />
  ));

  return (
    <>
      <div className="flexbox-item flexbox-item-1">
        {contractsToRender}
        <ContractAssignForm agents={agents} />
      </div>
      <div className="flexbox-item flexbox-item-2">
        {agentToRender}
        <AgentForm agents={agents} setAgents={setAgents} />
      </div>
      <div className="flexbox-item flexbox-item-3">{sellerToRender}</div>
    </>
  );
}

export default Dashboard;
