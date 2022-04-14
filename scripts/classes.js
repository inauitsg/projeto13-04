var urlBase = "http://localhost:3000/medicos"

class Contato {
    constructor(id, especialidade, nome, crm, fone, dias) {
        this.id = id
        this.especialidade = especialidade
        this.nome = nome
        this.crm = crm
        this.fone = fone
        this.dias = dias
    }

   
    consultarTodos(display) {
        fetch(urlBase, {
            method: 'POST',
            body: JSON.stringify(this),
            headers: {
                'Content-type': 'Application/json'}
            })
            .then(x => x.text())
            .then(data => display(data))
    }

    //função para editar 
    consultarPeloId(idcadastro, display) {
        fetch(`${urlBase}/${idcadastro}`)
            .then(x => x.text())
            .then(data => display(data))
    }

    update() {
        fetch(`${urlBase}/${this.id}`, {
            method: 'PUT',
            body: JSON.stringify(this),
            headers: {
                'Content-type': 'Application/json'
            }
        })
    }

    excluir(idcadastro) {
        fetch(`${urlBase}/${idcadastro}`, {
            method: 'DELETE'
        })
    }

}