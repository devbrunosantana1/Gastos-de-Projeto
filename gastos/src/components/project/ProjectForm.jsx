import { Input } from '../form/input';
import { Select } from '../form/Select';
import { SubmitButton } from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

export function ProjectForm({btnText}){
    return(
        <form className={styles.form}>
            <Input 
            type="text" 
            text="Nome do projeto" 
            name="name" 
            placeholder="Insira o nome do Projeto"
            />

            <Input 
            type="number" 
            text="Orçamento do Projeto"  
            name="budget" 
            placeholder="Insira o valor total do Projeto"
            />
            <Select name="category_id" text="Selecione a categoria"/>
            <SubmitButton text={btnText}/>
        </form>
    )
}