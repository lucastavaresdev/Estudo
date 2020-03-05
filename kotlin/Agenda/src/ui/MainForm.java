package ui;

import business.ContactBusiness;
import entity.ContactEntity;


import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;


public class MainForm extends JFrame {
    //atributos
    private JPanel rootPanel;
    private JButton buttonNewContact;
    private JButton buttonRemove;
    private JTable tableContats;
    private JLabel labelContactCount;
    private ContactBusiness mcontactBusiness;

    //construtor da interface
    public MainForm() {
        //chamando o painel de conteuto
        setContentPane(rootPanel);
        setSize(500, 250);
        setVisible(true);

        Dimension Dim = Toolkit.getDefaultToolkit().getScreenSize();
        setLocation(Dim.width / 2 - getSize().width / 2, Dim.height / 2 - getSize().height / 2);
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);

        mcontactBusiness = new ContactBusiness();

        setListeners();

        loadContacs();
    }

    private void loadContacs(){
        java.util.List<ContactEntity> contactList = mcontactBusiness.getList();
        String[] columNames = {"nome", "telefone"};
        DefaultTableModel model = new DefaultTableModel(new Object[0][0], columNames);

        for (ContactEntity i : contactList){
            Object[] o = new Object[2];

            o[0] = i.getName();
            o[1] = i.getFone();

            model.addRow(o);
        }
        tableContats.clearSelection();
        tableContats.setModel(model);

        labelContactCount.setText(mcontactBusiness.getContactCountBusiness());
    }

    private void setListeners() {
        buttonNewContact.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                new ContactForm();
                //fecha o formulario
                dispose();
            }
        });
        buttonRemove.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

            }
        });
    }

}
