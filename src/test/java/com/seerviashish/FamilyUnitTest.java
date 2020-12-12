package com.seerviashish;


import com.seerviashish.exception.NullMemberException;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;


public class FamilyUnitTest {
    private static final String CHILD_ADDITION_SUCCEEDED = "CHILD_ADDITION_SUCCEEDED";
    private static final String CHILD_ADDITION_FAILED = "CHILD_ADDITION_FAILED";
    private static final String PERSON_NOT_FOUND = "PERSON_NOT_FOUND";
    private static final String NONE = "NONE";

    @Test
    public void addNullHeadOfFamilyCheck() {
        Family family = new Family();
        Throwable exception = assertThrows(NullMemberException.class, () -> {
            family.addHeadOfFamily(null);
        });
        assertTrue(exception instanceof NullMemberException, "Add null head of family throws NullMemberException");
    }

    @Nested
    class AddFamilyMemberSpouseTest {
        private Family family;

        @BeforeEach
        void setup() {
            family = new Family();
            family.addHeadOfFamily(new Person("Queen Anga", Gender.Female));
        }

        @Test
        public void addSpouseFamilyMemberCheck() {
            Response<String> response = family.addFamilyMember("King Shan", Gender.Male, "Queen Anga", Constants.RelationShip.SPOUSE);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Add spouse response must be success");
            assertEquals(CHILD_ADDITION_SUCCEEDED, response.data, "Add spouse response must be CHILD_ADDITION_SUCCEEDED");
            assertEquals(null, response.error, "Add spouse response error must be null");
        }

        @Test
        public void addSpouseFamilyMemberToPersonNotInFamilyTreeCheck() {
            Response<String> response = family.addFamilyMember("King Shan", Gender.Male, "Rani", Constants.RelationShip.SPOUSE);
            assertEquals(ResponseStatus.FAILED, response.status, "Add spouse to not present family member response must be failed");
            assertEquals(null, response.data, "Add spouse to not present family member response must be null");
            assertEquals(PERSON_NOT_FOUND, response.error, "Add spouse to not present family member response error must be PERSON_NOT_FOUND");
        }

        @Test
        public void addFamilyMemberWithInvalidRelation() {
            Response<String> response = family.addFamilyMember("Tata Chacha", Gender.Male, "Queen Anga", Constants.RelationShip.MATERNAL_UNCLE);
            assertEquals(ResponseStatus.FAILED, response.status, "Add family member with invalid relation response must be failed");
            assertEquals(null, response.data, "Add family member with invalid relation response must be null");
            assertEquals(CHILD_ADDITION_FAILED, response.error, "Add family member with invalid relation error must be CHILD_ADDITION_FAILED");

        }
    }

    @Nested
    class AddChildMemberTest {
        private Family family;

        @BeforeEach
        void setup() {
            family = new Family();
            family.addHeadOfFamily(new Person("Queen Anga", Gender.Female));
            family.addFamilyMember("King Shan", Gender.Male, "Queen Anga", Constants.RelationShip.SPOUSE);
        }

        @Test
        public void addChildToMotherCheck() {
            Response<String> response = family.addFamilyMember("Vich", Gender.Male, "Queen Anga", Constants.RelationShip.MOTHER);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Add child to mother response must be success");
            assertEquals(CHILD_ADDITION_SUCCEEDED, response.data, "Add child to mother response must be CHILD_ADDITION_SUCCEEDED");
            assertEquals(null, response.error, "Add child to mother response error must be null");
        }

        @Test
        public void addChildToFatherCheck() {
            Response<String> response = family.addFamilyMember("Vich", Gender.Male, "King Shan", Constants.RelationShip.FATHER);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Add child to father response must be success");
            assertEquals(CHILD_ADDITION_SUCCEEDED, response.data, "Add child to father must be CHILD_ADDITION_SUCCEEDED");
            assertEquals(null, response.error, "Add child to father response error must be null");
        }

        @Test
        public void addChildToNullMotherCheck() {
            Response<String> response = family.addFamilyMember("Vich", Gender.Male, "Queen Tina", Constants.RelationShip.MOTHER);
            assertEquals(ResponseStatus.FAILED, response.status, "Add child to not present mother response must be failed");
            assertEquals(null, response.data, "Add child to not present mother response must be null");
            assertEquals(PERSON_NOT_FOUND, response.error, "Add child to not present mother response error must be PERSON_NOT_FOUND");
        }

        @Test
        public void addChildToNullFatherCheck() {
            Response<String> response = family.addFamilyMember("Vich", Gender.Male, "King Khan", Constants.RelationShip.FATHER);
            assertEquals(ResponseStatus.FAILED, response.status, "Add child to not present father response must be failed");
            assertEquals(null, response.data, "Add child to not present father response must be null");
            assertEquals(PERSON_NOT_FOUND, response.error, "Add child to not present father error must be PERSON_NOT_FOUND");
        }
    }

    @Nested
    static class GetFamilyMemberTest {
        private static final String INIT_FILE_PATH = "input/init.txt";
        private static Family family;
        private static GeekTrust geekTrust;

        @BeforeAll
        static void setup() {
            family = new Family();
            geekTrust = new GeekTrust();
            geekTrust.initFamilyTree(family, INIT_FILE_PATH);
        }

        @Test
        public void getQueenAngaHusbandCheck() {
            Response<String> response = family.getRelationShip("Queen Anga", Constants.RelationShip.SPOUSE);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get Queen Anga spouse response must be success");
            assertEquals("King Shan", response.data, "Get Queen Anga spouse name must be equals to `King Shan`");
            assertEquals(null, response.error, "Get Queen Anga spouse error must be null");
        }

        @Test
        public void getKingShanWifeCheck() {
            Response<String> response = family.getRelationShip("King Shan", Constants.RelationShip.SPOUSE);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get King Shan spouse response must be success");
            assertEquals("Queen Anga", response.data, "Get King Shan spouse name must be equals to `Queen Anga`");
            assertEquals(null, response.error, "Get King Shan spouse error must be null");
        }

        @Test
        public void getIshWifeCheck() {
            Response<String> response = family.getRelationShip("Ish", Constants.RelationShip.SPOUSE);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get Ish spouse response must be success");
            assertEquals("NONE", response.data, "Get Ish spouse name must be equals to `NONE`");
            assertEquals(null, response.error, "Get Ish spouse error must be null");
        }

        @Test
        public void getKingShanSonCheck() {
            Response<String> response = family.getRelationShip("King Shan", Constants.RelationShip.SON);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get King Shan son response must be success");
            assertEquals(null, response.error, "Get King Shan son response error must be null");
            assertTrue(response.data.contains("Chit"), "Get King Shan son response data must contains Chit");
            assertTrue(response.data.contains("Ish"), "Get King Shan son response data must contains Ish");
            assertTrue(response.data.contains("Vich"), "Get King Shan son response data must contains Vich");
            assertTrue(response.data.contains("Aras"), "Get King Shan son response data must contains Aras");
        }

        @Test
        public void getKingShanDaughterCheck() {
            Response<String> response = family.getRelationShip("King Shan", Constants.RelationShip.DAUGHTER);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get King Shan daughter response must be success");
            assertEquals(null, response.error, "Get King Shan daughter response error must be null");
            assertTrue(response.data.contains("Satya"), "Get King Shan daughter response data must contains Satya");
        }

        @Test
        public void getSiblingsCheck() {
            Response<String> response = family.getRelationShip("Atya", Constants.RelationShip.SIBLINGS);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get sibling of Atya response must be success");
            assertEquals(null, response.error, "Get sibling of Atya response error must be null");
            assertTrue(response.data.contains("Asva"), "Get sibling of Atya response  data must contains Asva");
            assertTrue(response.data.contains("Vyas"), "Get sibling of Atya response  data must contains Vyas");
        }

        @Test
        public void getMotherCheck() {
            Response<String> response = family.getRelationShip("Vich", Constants.RelationShip.MOTHER);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get mother of Vich response must be success");
            assertEquals(null, response.error, "Get mother of Vich response error must be null");
            assertEquals("Queen Anga", response.data, "Get mother of Vich response  data must contains Queen Anga");
        }

        @Test
        public void getFatherCheck() {
            Response<String> response = family.getRelationShip("Vich", Constants.RelationShip.FATHER);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get father of Vich response must be success");
            assertEquals(null, response.error, "Get father of Vich response error must be null");
            assertEquals("King Shan", response.data, "Get father of Vich response  data must contains King Shan");
        }


        @Test
        public void getPaternalUnclesCheck() {
            Response<String> response = family.getRelationShip("Ahit", Constants.RelationShip.PATERNAL_UNCLE);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get paternal uncle of Ahit response must be success");
            assertEquals(null, response.error, "Get paternal uncle of Ahit response error must be null");
            assertTrue(response.data.contains("Chit"), "Get paternal uncle of Ahit response data must contains Chit");
            assertTrue(response.data.contains("Ish"), "Get paternal uncle of Ahit response data must contains Ish");
            assertTrue(response.data.contains("Vich"), "Get paternal uncle of Ahit response data must contains Vich");
        }

        @Test
        public void getNonePaternalUnclesCheck() {
            Response<String> response = family.getRelationShip("Asva", Constants.RelationShip.PATERNAL_UNCLE);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get paternal uncle of Asva response must be success");
            assertEquals(null, response.error, "Get paternal uncle of Ahit response error must be null");
            assertEquals(NONE, response.data, "Get paternal uncle of Ahit response data must contains NONE");
        }

        @Test
        public void getMaternalUnclesCheck() {
            Response<String> response = family.getRelationShip("Asva", Constants.RelationShip.MATERNAL_UNCLE);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get maternal uncle of Asva response must be success");
            assertEquals(null, response.error, "Get maternal uncle of Asva response error must be null");
            assertTrue(response.data.contains("Vich"), "Get maternal uncle of Asva response data must contains Vich");
            assertTrue(response.data.contains("Aras"), "Get maternal uncle of Asva response data must contains Aras");
            assertTrue(response.data.contains("Ish"), "Get maternal uncle of Asva response data must contains Ish");
            assertTrue(response.data.contains("Chit"), "Get maternal uncle of Asva response data must contains Chit");
        }

        @Test
        public void getNoneMaternalUnclesCheck() {
            Response<String> response = family.getRelationShip("Amba", Constants.RelationShip.MATERNAL_UNCLE);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get maternal uncle of Amba response must be success");
            assertEquals(null, response.error, "Get maternal uncle of Amba response error must be null");
            assertEquals(NONE, response.data, "Get maternal uncle of Amba response data must be NONE");
        }

        @Test
        public void getPaternalAuntiesCheck() {
            Response<String> response = family.getRelationShip("Kriya", Constants.RelationShip.PATERNAL_AUNT);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get paternal aunt of Kriya response must be success");
            assertEquals(null, response.error, "Get paternal aunt of Kriya response error must be null");
            assertEquals("Atya", response.data, "Get paternal aunt of Kriya response data must be Atya");
        }

        @Test
        public void getNonePaternalAuntiesCheck() {
            Response<String> response = family.getRelationShip("Yodhan", Constants.RelationShip.PATERNAL_AUNT);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get paternal aunt of Yodhan response must be success");
            assertEquals(null, response.error, "Get paternal aunt of Yodhan response error must be null");
            assertEquals(NONE, response.data, "Get paternal aunt of Yodhan response data must be NONE");
        }

        @Test
        public void getMaternalAuntiesCheck() {
            Response<String> response = family.getRelationShip("Yodhan", Constants.RelationShip.MATERNAL_AUNT);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get maternal aunt of Yodhan response must be success");
            assertEquals(null, response.error, "Get maternal aunt of Yodhan response error must be null");
            assertEquals("Tritha", response.data, "Get maternal aunt of Yodhan response data must be Tritha");
        }

        @Test
        public void getNoneMaternalAuntiesCheck() {
            Response<String> response = family.getRelationShip("Asva", Constants.RelationShip.MATERNAL_AUNT);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get maternal aunt of Asva response must be success");
            assertEquals(null, response.error, "Get maternal aunt of Asva response error must be null");
            assertEquals(NONE, response.data, "Get maternal aunt of Asva response data must be NONE");
        }

        @Test
        public void getSisterInLawCheck() {
            Response<String> response = family.getRelationShip("Jaya", Constants.RelationShip.SISTER_IN_LAW);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get sister in law of Jaya response must be success");
            assertEquals(null, response.error, "Get sister in law of Jaya response error must be null");
            assertEquals("Tritha", response.data, "Get sister in law of Jaya response data must be Tritha");
        }

        @Test
        public void getBrotherInLawCheck() {
            Response<String> response = family.getRelationShip("Satvy", Constants.RelationShip.BROTHER_IN_LAW);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get brother in law of Satvy response must be success");
            assertEquals(null, response.error, "Get brother in law of Satvy response error must be null");
            assertEquals("Vyas", response.data, "Get brother in law of Satvy response data must be Vyas");
        }

        @Test
        public void getNoneSisterInLawCheck() {
            Response<String> response = family.getRelationShip("Vyan", Constants.RelationShip.SISTER_IN_LAW);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get sister in law of Vyan response must be success");
            assertEquals(null, response.error, "Get sister in law of Vyan response error must be null");
            assertEquals(NONE, response.data, "Get sister in law of Vyan response data must be NONE");
        }

        @Test
        public void getNoneBrotherInLawCheck() {
            Response<String> response = family.getRelationShip("Chika", Constants.RelationShip.BROTHER_IN_LAW);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get brother in law of Chika response must be success");
            assertEquals(null, response.error, "Get brother in law of Chika response error must be null");
            assertEquals(NONE, response.data, "Get brother in law of Chika response data must be NONE");
        }

        @Test
        public void getBrotherCheck() {
            Response<String> response = family.getRelationShip("Chit", Constants.RelationShip.BROTHER);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get brother of Chit response must be success");
            assertEquals(null, response.error, "Get brother of Chit response error must be null");
            assertTrue(response.data.contains("Ish"), "Get brother of Chit response data must include Ish");
            assertTrue(response.data.contains("Vich"), "Get brother of Chit response data must include Vich");
            assertTrue(response.data.contains("Aras"), "Get brother of Chit response data must include Aras");
        }

        @Test
        public void getSisterCheck() {
            Response<String> response = family.getRelationShip("Vila", Constants.RelationShip.SISTER);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get sister of Vila response must be success");
            assertEquals(null, response.error, "Get sister of Vila response error must be null");
            assertTrue(response.data.contains("Chika"), "Get sister of Vila response data must include Chika");
        }

        @Test
        public void getNoneBrotherCheck() {
            Response<String> response = family.getRelationShip("Chika", Constants.RelationShip.BROTHER);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get brother of Chika response must be success");
            assertEquals(null, response.error, "Get brother of Chika response error must be null");
            assertEquals(NONE, response.data, "Get brother of Chika response data must include NONE");
        }

        @Test
        public void getNoneSisterCheck() {
            Response<String> response = family.getRelationShip("Jnki", Constants.RelationShip.SISTER);
            assertEquals(ResponseStatus.SUCCESS, response.status, "Get sister of Jnki response must be success");
            assertEquals(null, response.error, "Get sister of Jnki response error must be null");
            assertEquals(NONE, response.data, "Get sister of Jnki response data must include NONE");
        }


    }
}
