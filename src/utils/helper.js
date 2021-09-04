
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
function getImageUrl(accountImg) {
    return accountImg.imgUrl;
}
const accountHelper = {
    getFullName,
    getImageUrl
};

export default accountHelper;