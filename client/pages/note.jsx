import { Button, Container, Form } from 'react-bootstrap';
import { ethers }  from 'ethers';
import { abi } from '../src/contracts/abi';
import { useEffect, useState } from 'react';
import { Article } from '../styles/MameStyled/Mame.styled';

export default function Note() {
  const [notes, setNotes] = useState([]);
  const [signer, setSigner] = useState('-');
  const [contract, setContract] = useState('-');

  const connect = async () => {
    try {
      const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

      await ethereum.request({ method: 'eth_requestAccounts' }); // CATATAN eth_sendTransactions
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setSigner(await provider.getSigner().getAddress());
      setContract(new ethers.Contract(contractAddress, abi, provider));

      console.log({ message: 'connect successfully' });
    } catch (error) {
      console.error({ message: 'failed to connect', errorConnect: error });
    }
  };

  const createNewNote = async (e) => {
    e.preventDefault();
    try {
      const form = document.forms[e.target.name];
      const descriptionValue = form['description'].value;
  
      const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
      const provider = new ethers.providers.Web3Provider(window.ethereum);
  
      const contract = new ethers.Contract(contractAddress, abi, provider);
      const web3c = await contract.connect(provider.getSigner());
      await web3c.create(descriptionValue);

      console.log({ message: 'successfully to create new note' });
    } catch (error) {
      console.error({ message: 'failed to create new note', createNoteError: error });
    }
  };

  const loadData = async () => {
    setNotes(await contract.getTodos());

    console.log({
      owner: await contract.getOwner(),
      users: signer,
      text: await contract.textRaw(),
      number: await contract.number(),
      notes,
    });
  };

  return (
    <Article className="bg-white d-flex align-items-center"  css={{ padding: '60px 0' }}>
      <Container>
        {/* <Button variant="success" className="mb-5 w-50" id="connectWallet">Eth connect</Button> */}
        <Button onClick={connect}  variant="success" className="mb-5 w-50" id="connectWallet">Eth connect</Button>
        <Container id="createNewNoteContainers" className="mb-5 border p-5">
          <h2 className="mb-3 fw-bold">Create Note</h2>
          <Form name="form_create_note" onSubmit={createNewNote}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Text</Form.Label>
              <Form.Control name="description" type="text" placeholder="hai semua" />
            </Form.Group>
            <Button type="submit">Submit</Button>
            <Button id="loadData" onClick={loadData}>Load Data</Button>
          </Form>
        </Container>

        <Container id="notesContainer" className="border p-5">
          <h2 className="mb-5">Notes</h2>
          <Container>
            {notes.map((_note, _noteIndex) =>
              <article key={_noteIndex} className="border p-5 bg-light">
                <h2>{_note}</h2>
              </article>
            )}
          </Container>
        </Container>
        
      </Container>
    </Article>
  );
}