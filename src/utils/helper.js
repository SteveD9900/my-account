
function getFullName(accountData) {
    var firstName;
    var lastName;
    accountData.forEach((item) =>  {
        if (item.key === "firstname") {
            firstName = item.value;
        } else if (item.key === "lastname") {
            lastName = item.value;
        }
    });
    return firstName + " " + lastName;
}
const accountHelper = {
    getFullName
};

export default accountHelper;