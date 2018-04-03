class FormAdicionarAlunoView {
    constructor(seletor) {
        this.$selector = blg.$(seletor);
        this.$selector.innerHTML = this.getTemplate();
    }

    getTemplate() {
        return `
        <form action="#">
             <input type="text" id="nome" required>
             <input type="number" id="nota1" required min="0" max="10">
             <input type="number" id="nota2" required min="0" max="10">
             <input type="number" id="nota3" required min="0" max="10">
             <input type="number" id="nota4" required min="0" max="10">
             <button type="submit">Adicionar</button>
        </form>
        `;
    }
}
