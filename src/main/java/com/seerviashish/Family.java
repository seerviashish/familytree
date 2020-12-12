package com.seerviashish;

import com.seerviashish.exception.InvalidRelationShip;
import com.seerviashish.exception.NullMemberException;
import org.apache.commons.lang3.StringUtils;

import java.util.ArrayList;
import java.util.HashMap;

public class Family {
    private HashMap<String, Person> personMaps;
    private Person headOfFamily;

    public Family() {
        this.personMaps = new HashMap<>();
    }

    /**
     * Add head of family
     *
     * @param headOfFamily
     */
    public void addHeadOfFamily(Person headOfFamily) {
        if (headOfFamily == null) {
            throw new NullMemberException();
        }
        this.personMaps.put(headOfFamily.name, headOfFamily);
        this.headOfFamily = headOfFamily;
    }

    /**
     * Add family member by name and relation ship
     *
     * @param name
     * @param gender
     * @param relative
     * @param relationShip
     * @return
     */
    public Response<String> addFamilyMember(String name, Gender gender, String relative, String relationShip) {
        try {
            Person relativeMember = getFamilyMember(relative);
            if (relativeMember == null) {
                return new Response<>(ResponseStatus.FAILED, null, Constants.Messages.PERSON_NOT_FOUND);
            }
            switch (relationShip) {
                case Constants.RelationShip.SPOUSE:
                    Person husbandOrWife = new Person(name, gender);
                    personMaps.put(name, husbandOrWife);
                    husbandOrWife.setSpouse(relativeMember);
                    relativeMember.setSpouse(husbandOrWife);
                    break;
                case Constants.RelationShip.MOTHER: {
                    Person child = new Person(name, gender, relativeMember.spouse, relativeMember, null);
                    personMaps.put(name, child);
                    relativeMember.addChild(child);
                    child.father.children = relativeMember.children;
                    break;
                }
                case Constants.RelationShip.FATHER: {
                    Person child = new Person(name, gender, relativeMember, relativeMember.spouse, null);
                    personMaps.put(name, child);
                    relativeMember.addChild(child);
                    child.mother.children = relativeMember.children;
                    break;
                }
                default:
                    throw new InvalidRelationShip();
            }
            return new Response<>(ResponseStatus.SUCCESS, Constants.Messages.CHILD_ADDITION_SUCCEEDED, null);
        } catch (Exception e) {
            return new Response<>(ResponseStatus.FAILED, null, Constants.Messages.CHILD_ADDITION_FAILED);
        }
    }

    /**
     * Get relationship by name and relation ship
     *
     * @param name
     * @param relationShip
     * @return
     */
    public Response<String> getRelationShip(String name, String relationShip) {
        switch (relationShip) {
            case Constants.RelationShip.MOTHER:
            case Constants.RelationShip.FATHER:
                return getParent(name, relationShip);
            case Constants.RelationShip.MATERNAL_AUNT:
            case Constants.RelationShip.MATERNAL_UNCLE:
            case Constants.RelationShip.PATERNAL_AUNT:
            case Constants.RelationShip.PATERNAL_UNCLE:
                return getUncleOrAunt(name, relationShip);
            case Constants.RelationShip.BROTHER_IN_LAW:
            case Constants.RelationShip.SISTER_IN_LAW:
                return getInLaw(name, relationShip);
            case Constants.RelationShip.SIBLINGS:
                return getSiblings(name);
            case Constants.RelationShip.SON:
            case Constants.RelationShip.DAUGHTER:
                return getChildren(name, relationShip);
            case Constants.RelationShip.SPOUSE:
                return getSpouse(name);
            case Constants.RelationShip.BROTHER:
            case Constants.RelationShip.SISTER:
                return getBrotherOrSister(name , relationShip);
            default:
                return new Response<>(ResponseStatus.FAILED, null, Constants.Messages.NONE);
        }
    }

    private Response<String> getSpouse(String name) {
        try {
            Person member = getFamilyMember(name);
            if (member == null) {
                return new Response<>(ResponseStatus.FAILED, null, Constants.Messages.PERSON_NOT_FOUND);
            }
            if (member.spouse == null) {
                return new Response<>(ResponseStatus.SUCCESS, Constants.Messages.NONE, null);
            }
            return new Response<>(ResponseStatus.SUCCESS, member.spouse.name, null);
        } catch (Exception e) {
            return new Response<>(ResponseStatus.FAILED, null, Constants.Messages.PERSON_NOT_FOUND);
        }
    }

    /**
     * Get siblings by name
     *
     * @param name
     * @return
     */
    private Response<String> getSiblings(String name) {
        try {
            Person member = getFamilyMember(name);
            if (member == null) {
                return new Response<>(ResponseStatus.FAILED, null, Constants.Messages.PERSON_NOT_FOUND);
            }
            if (member.father == null && member.mother == null) {
                return new Response<>(ResponseStatus.SUCCESS, Constants.Messages.NONE, null);
            }
            Person parents = member.father != null ? member.father : member.mother;
            ArrayList<String> result = new ArrayList<>();
            int length = parents.children.size();
            for (int i = 0; i < length; i++) {
                Person child = parents.children.get(i);
                if (!child.name.equals(member.name)) {
                    result.add(child.name);
                }
            }
            return new Response<>(ResponseStatus.SUCCESS, result.size() == 0 ? Constants.Messages.NONE : StringUtils.join(result, " "), null);
        } catch (Exception e) {
            return new Response<>(ResponseStatus.FAILED, null, Constants.Messages.PERSON_NOT_FOUND);
        }
    }

    /**
     * Get Brother or Sister by name
     *
     * @param name
     * @param relationShip
     * @return
     */
    private Response<String> getBrotherOrSister(String name, String relationShip) {
        try {
            Person member = getFamilyMember(name);
            if (member == null) {
                return new Response<>(ResponseStatus.FAILED, null, Constants.Messages.PERSON_NOT_FOUND);
            }
            if (member.father == null && member.mother == null) {
                return new Response<>(ResponseStatus.SUCCESS, Constants.Messages.NONE, null);
            }
            Person parents = member.father != null ? member.father : member.mother;
            ArrayList<String> result = new ArrayList<>();
            int length = parents.children.size();
            for (int i = 0; i < length; i++) {
                Person child = parents.children.get(i);
                if (!child.name.equals(member.name) && ((relationShip.equals(Constants.RelationShip.BROTHER) ? Gender.Male : Gender.Female) == child.gender)) {
                    result.add(child.name);
                }
            }
            return new Response<>(ResponseStatus.SUCCESS, result.size() == 0 ? Constants.Messages.NONE : StringUtils.join(result, " "), null);
        } catch (Exception e) {
            return new Response<>(ResponseStatus.FAILED, null, Constants.Messages.PERSON_NOT_FOUND);
        }
    }

    /**
     * Get children by parent's name and relation
     *
     * @param name
     * @param relation
     * @return
     */
    private Response<String> getChildren(String name, String relation) {
        try {
            Person member = getFamilyMember(name);
            if (member == null) {
                return new Response<>(ResponseStatus.FAILED, null, Constants.Messages.PERSON_NOT_FOUND);
            }
            if (member.children == null) {
                return new Response<>(ResponseStatus.SUCCESS, Constants.Messages.NONE, null);
            }
            ArrayList<String> result = new ArrayList<>();
            int length = member.children.size();
            for (int i = 0; i < length; i++) {
                Person child = member.children.get(i);
                if ((relation.equals(Constants.RelationShip.SON) ? Gender.Male : Gender.Female) == child.gender) {
                    result.add(child.name);
                }
            }
            return new Response<>(ResponseStatus.SUCCESS, result.size() == 0 ? Constants.Messages.NONE : StringUtils.join(result, " "), null);
        } catch (Exception e) {
            return new Response<>(ResponseStatus.FAILED, null, Constants.Messages.PERSON_NOT_FOUND);
        }
    }

    /**
     * Get in brother in law or sister in law by name and relation
     *
     * @param name
     * @param relation
     * @return
     */
    private Response<String> getInLaw(String name, String relation) {
        try {
            Person member = getFamilyMember(name);
            if (member == null) {
                return new Response<>(ResponseStatus.FAILED, null, Constants.Messages.PERSON_NOT_FOUND);
            }
            if (member.spouse == null || (member.spouse.father == null && member.spouse.mother == null)) {
                return new Response<>(ResponseStatus.SUCCESS, Constants.Messages.NONE, null);
            }
            Person parents = member.spouse.father != null ? member.spouse.father : member.spouse.mother;
            ArrayList<String> result = new ArrayList<>();
            int length = parents.children.size();
            for (int i = 0; i < length; i++) {
                Person child = parents.children.get(i);
                if (child.gender == (relation.equals(Constants.RelationShip.SISTER_IN_LAW) ? Gender.Female : Gender.Male) && !child.name.equals(member.spouse.name)) {
                    result.add(child.name);
                }
            }
            return new Response<>(ResponseStatus.SUCCESS, result.size() == 0 ? Constants.Messages.NONE : StringUtils.join(result, " "), null);
        } catch (Exception e) {
            return new Response<>(ResponseStatus.FAILED, null, Constants.Messages.PERSON_NOT_FOUND);
        }
    }

    /**
     * Get uncle or aunt by name and relation
     *
     * @param name
     * @param relation
     * @return
     */
    private Response<String> getUncleOrAunt(String name, String relation) {
        try {
            Person member = getFamilyMember(name);
            if (member == null) {
                return new Response<>(ResponseStatus.FAILED, null, Constants.Messages.PERSON_NOT_FOUND);
            }
            boolean isMaternal = relation.equals(Constants.RelationShip.MATERNAL_AUNT) || relation.equals(Constants.RelationShip.MATERNAL_UNCLE);
            if (isMaternal) {
                if (member.mother == null || (member.mother.father == null && member.mother.mother == null)) {
                    return new Response<>(ResponseStatus.SUCCESS, Constants.Messages.NONE, null);
                }
            } else {
                if (member.father == null || (member.father.father == null && member.father.mother == null)) {
                    return new Response<>(ResponseStatus.SUCCESS, Constants.Messages.NONE, null);
                }
            }
            Person grandParent;
            if (isMaternal) {
                grandParent = member.mother.father != null ? member.mother.father : member.mother.mother;
            } else {
                grandParent = member.father.father != null ? member.father.father : member.father.mother;
            }
            ArrayList<String> result = new ArrayList<>();
            boolean isFemale = relation.equals(Constants.RelationShip.MATERNAL_AUNT) || relation.equals(Constants.RelationShip.PATERNAL_AUNT);
            int length = grandParent.children.size();
            for (int i = 0; i < length; i++) {
                Person child = grandParent.children.get(i);
                if (child.gender == (isFemale ? Gender.Female : Gender.Male) && !child.name.equals(isMaternal ? member.mother.name : member.father.name)) {
                    result.add(child.name);
                }
            }
            return new Response<>(ResponseStatus.SUCCESS, result.size() == 0 ? Constants.Messages.NONE : StringUtils.join(result, " "), null);
        } catch (Exception e) {
            return new Response<>(ResponseStatus.FAILED, null, Constants.Messages.PERSON_NOT_FOUND);
        }
    }

    /**
     * Get parent by name and relation [father or mother]
     *
     * @param name
     * @param relation
     * @return
     */
    private Response<String> getParent(String name, String relation) {
        try {
            Person member = getFamilyMember(name);
            if (member == null) {
                return new Response<>(ResponseStatus.FAILED, null, Constants.Messages.PERSON_NOT_FOUND);
            }
            boolean isFather = relation.equals(Constants.RelationShip.FATHER);
            if ((isFather && member.father == null) || (!isFather && member.mother == null)) {
                return new Response<>(ResponseStatus.SUCCESS, Constants.Messages.NONE, null);
            }
            Person parent = isFather ? member.father : member.mother;
            return new Response<>(ResponseStatus.SUCCESS, parent.name, null);
        } catch (Exception e) {
            return new Response<>(ResponseStatus.FAILED, null, Constants.Messages.PERSON_NOT_FOUND);
        }
    }

    /**
     * Get family member by name
     *
     * @param name
     * @return
     */
    private Person getFamilyMember(String name) {
        return this.personMaps.getOrDefault(name, null);
    }
}
