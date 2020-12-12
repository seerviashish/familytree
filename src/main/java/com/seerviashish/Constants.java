package com.seerviashish;

public class Constants {
    private Constants() {
    }

    static class Commands {
        private Commands() {
        }

        public static final String ADD_CHILD = "ADD_CHILD";
        public static final String ADD_FAMILY_HEAD = "ADD_FAMILY_HEAD";
        public static final String ADD_SPOUSE = "ADD_SPOUSE";
        public static final String GET_RELATIONSHIP = "GET_RELATIONSHIP";
    }

    static class Messages {
        private Messages() {
        }

        public static final String CHILD_ADDITION_SUCCEEDED = "CHILD_ADDITION_SUCCEEDED";
        public static final String PERSON_NOT_FOUND = "PERSON_NOT_FOUND";
        public static final String CHILD_ADDITION_FAILED = "CHILD_ADDITION_FAILED";
        public static final String NONE = "NONE";
    }

    static class RelationShip {
        private RelationShip() {
        }

        public static final String PATERNAL_UNCLE = "Paternal-Uncle";
        public static final String MATERNAL_UNCLE = "Maternal-Uncle";
        public static final String PATERNAL_AUNT = "Paternal-Aunt";
        public static final String MATERNAL_AUNT = "Maternal-Aunt";
        public static final String SISTER_IN_LAW = "Sister-In-Law";
        public static final String BROTHER_IN_LAW = "Brother-In-Law";
        public static final String SON = "Son";
        public static final String SPOUSE = "Spouse";
        public static final String DAUGHTER = "Daughter";
        public static final String SIBLINGS = "Siblings";
        public static final String MOTHER = "Mother";
        public static final String FATHER = "Father";
        public static final String BROTHER = "Brother";
        public static final String SISTER = "Sister";
    }
}
