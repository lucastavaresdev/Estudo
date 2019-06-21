package exercicios
import org.junit.Assert
import  org.junit.Test;

fun reverseString(){

    @Test fun reverseUseSB(){

        Assert.assertEquals("bs niltok",reverseUseSB("kotlin sb"))
    }

    @Test fun reverseUseStringLoop(){
        Assert.assertEquals("pool niltok", reverseUseStringLoop("kotlin loop"))
    }


}


