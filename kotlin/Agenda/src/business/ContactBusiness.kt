package business

import entity.ContactEntity
import repositoryDados.ContactRepository
import java.lang.Exception

class ContactBusiness {
    private fun validate(name: String, fone: String) {
        if (name === "") {
            throw Exception("nome é obrigatorio")
        }
        if (fone === "") {
            throw Exception("nome é obrigatorio")
        }
    }

    private fun validateDelete(name: String, fone: String) {
        if (name == "" || fone == "") {
            throw Exception("Selecione um contato")
        }
    }

    fun getContactCountBusiness() : String{
        val list = getList();

        return when{
            list.isEmpty() -> "0 contatos";
            list.size == 1 -> "1 contato";
            else -> "${list.size} contatos"
        }
    }

    fun save(name: String, fone: String) {
        validate(name, fone)
        val contact = ContactEntity(name, fone);
        ContactRepository.save(contact)
    }

    fun delete(name: String, fone: String) {
        validateDelete(name, fone)

        val contact = ContactEntity(name, fone);
        ContactRepository.delete(contact)

    }

    fun getList():List<ContactEntity>{
        return ContactRepository.getList();
    }

}