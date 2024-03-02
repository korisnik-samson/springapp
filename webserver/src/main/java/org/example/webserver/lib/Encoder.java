package org.example.webserver.lib;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Encoder {
    public String getMd5(String input) {
        try {
            MessageDigest msgDst = MessageDigest.getInstance("MD5");
            byte[] msgArr = msgDst.digest(input.getBytes());

            BigInteger bi = new BigInteger(1, msgArr);
            String hshtxt = bi.toString(16);

            while (hshtxt.length() < 32) hshtxt = "0" + hshtxt;

            return hshtxt;

        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }
}
