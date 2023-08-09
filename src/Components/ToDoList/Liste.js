import "./Liste.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect,useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import Table from 'react-bootstrap/Table';
function Liste() {
    const [lists, setLists] = useState([])
    const [idTask, setIdTask] = useState(0)
    const [inputTask, setInputTask] = useState(null)
    const [emptyList, setEmptyList] = useState(true)
    const { toggle } = useContext(ThemeContext);
    useEffect( () => {
        setEmptyList(!lists.length>0)
    }, [lists])
    return (
        <div className="Liste">
            <div className="yes">
            <Form.Control className="Form-control" type="text" value={inputTask} onChange={(el) => setInputTask(el.target.value)} placeholder="Ajouter une tache"/>
                <Button onClick={() =>  {
                     setLists([...lists,{id : idTask , task: inputTask, done: false}]);

                     setIdTask(idTask+1);
                    //setInputTask(null);
                    console.log('Liste :', lists);
                 
                }}>
                    Ajouter
                </Button>
            </div>
            <Table variant={toggle ? "dark" : ""} striped bordered hover size="sm">
            <thead>  
                <tr> 
                <th> Titre </th>
                <th> Supprimer </th>
                </tr>
                </thead>
                <tbody>
            {emptyList && <p>Aucun élément à manipuler</p>}
            {!emptyList &&
                lists.map((element) => (
                    <tr>
                        <td>{element.task}</td>
                        <td onClick={() =>  {
                     setLists(lists.filter(item => item.id !== element.id));

                    //setInputTask(null);
                    console.log('Liste :', lists);
                 
                }} > <Button> X </Button> 
                 </td>
                    </tr>
                ))}
                </tbody>
            </Table>

        </div>
    );
}

export default Liste;
