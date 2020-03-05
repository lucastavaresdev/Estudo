package execicios


import org.junit.Assert
import org.junit.Test


class ReverseStringTest {
    @Test fun reverseUsingSb(){
        Assert.assertEquals("bs niltok", reverseUsingSb("kotlin sb"))
    }
    @Test fun reverseUsingLoop(){
        Assert.assertEquals("pool niltok", reverseUsingLoop("kotlin loop"))
    }
}