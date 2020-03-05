package ui;

import business.ContactBusiness;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;



public class ContactForm extends JFrame {


    private JPanel rootPanel;
    private JTextField textName;
    private JTextField textFone;
    private JButton buttonSave;
    private JButton buttonCancel;
    private ContactBusiness mContactBusiness;

    //construtor da interface
    public ContactForm(){
        //chamando o painel de conteuto
        setContentPane(rootPanel);
        setSize(500,250);
        setVisible(true);

        Dimension Dim = Toolkit.getDefaultToolkit().getScreenSize();
        setLocation(Dim.width / 2 - getSize().width / 2, Dim.height / 2 - getSize().height / 2);
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);

        mContactBusiness = new ContactBusiness();
        setListeners();

    }


    private void setListeners(){

        buttonCancel.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                new MainForm();
                dispose();
            }
        });

        buttonSave.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
              try{
                  String name = textName.getText();
                  String fone = textFone.getText();

                  mContactBusiness.save(name, fone);
                  new MainForm();
                  dispose();
              }catch (Exception E){
                  JOptionPane.showMessageDialog(new JFrame() , E.getMessage());
              }
            }
        });
    }
}
