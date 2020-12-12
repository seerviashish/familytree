package com.seerviashish;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class GeekTrust {

    public static void main(String[] args) {
        Family family = new Family();
        GeekTrust geekTrust = new GeekTrust();
        geekTrust.initFamilyTree(family, args[0]);
        geekTrust.inputToFamilyTree(family, args[1]);
    }

    /**
     * Get start family and args
     *
     * @param family
     * @param filePath
     */
    public void initFamilyTree(Family family, String filePath) {
        try {
            File preInputFile = new File(filePath);
            processFileInput(family, preInputFile, false);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Please enter file location!");
        }
    }

    /**
     *
     * @param family
     * @param filePath
     */
    public void inputToFamilyTree(Family family, String filePath) {
        try {
            File inputFile = new File(filePath);
            processFileInput(family, inputFile, true);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Please enter input file location!");
        }
    }

    /**
     * Process file input
     * @param family
     * @param file
     * @param isInputFile
     */
    public static void processFileInput(Family family, File file, boolean isInputFile) {
        try (Scanner sc = new Scanner(file)) {
            while (sc.hasNextLine()) {
                String command = sc.nextLine();
                if (isInputFile) {
                    processInputCommand(family, command);
                } else {
                    processPreInput(family, command);
                }
            }
        } catch (FileNotFoundException e) {
            System.out.println("Input file not found!");
        }
    }

    /**
     * Process pre input file
     * @param family
     * @param command
     */
    private static void processPreInput(Family family, String command) {
        String[] commands = command.split(";");
        Gender gender;
        Response<String> response;
        switch (commands[0]) {
            case Constants.Commands.ADD_CHILD:
                gender = commands[3].equals(Gender.Male.name()) ? Gender.Male : Gender.Female;
                family.addFamilyMember(commands[2], gender, commands[1], Constants.RelationShip.MOTHER);
                break;
            case Constants.Commands.ADD_FAMILY_HEAD:
                gender = commands[2].equals(Gender.Male.name()) ? Gender.Male : Gender.Female;
                Person headOfFamily = new Person(commands[1], gender);
                family.addHeadOfFamily(headOfFamily);
                break;
            case Constants.Commands.ADD_SPOUSE:
                gender = commands[3].equals(Gender.Male.name()) ? Gender.Male : Gender.Female;
                family.addFamilyMember(commands[2], gender, commands[1], Constants.RelationShip.SPOUSE);
                break;
        }
    }

    /**
     * Print Family functions response
     * @param response
     */
    private static void print(Response<String> response) {
        if (response.status == ResponseStatus.SUCCESS) {
            System.out.println(response.data);
        } else {
            System.out.println(response.error);
        }
    }

    /**
     * Process input command
     * @param family
     * @param command
     */
    private static void processInputCommand(Family family, String command) {
        String[] commands = command.split(";");
        Gender gender;
        Response<String> response;
        if (Constants.Commands.ADD_CHILD.equals(commands[0])) {
            gender = commands[3].equals(Gender.Male.name()) ? Gender.Male : Gender.Female;
            response = family.addFamilyMember(commands[2], gender, commands[1], Constants.RelationShip.MOTHER);
            print(response);
        } else if(Constants.Commands.GET_RELATIONSHIP.equals(commands[0])) {
            response = family.getRelationShip(commands[1], commands[2]);
            print(response);
        }
    }
}
