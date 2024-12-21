function validateEmail1(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
function validateEmail2(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}
function validateEmail3(email) {
    if (!email.includes('@') || !email.includes('.')) {
        return false;
    }
    const parts = email.split('@');
    if (parts.length !== 2 || parts[0].length === 0 || parts[1].length === 0) {
        return false;
    }
    const domainParts = parts[1].split('.');
    if (domainParts.length < 2 || domainParts.some(part => part.length === 0)) {
        return false;
    }
    return true;
}
function validateEmail4(email) {
    let atCount = 0;
    let dotCount = 0;
    let atIndex = -1;
    let dotIndex = -1;
    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@') {
            atCount++;
            atIndex = i;
        } else if (email[i] === '.') {
            dotCount++;
            dotIndex = i;
        }
    }
    if (atCount !== 1 || dotCount < 1 || atIndex === 0 || dotIndex === email.length - 1 || atIndex > dotIndex) {
        return false;
    }
    return true;
}
function validateEmail5(email) {
    let atCount = 0;
    let dotCount = 0;
    let atIndex = -1;
    let dotIndex = -1;
    let i = 0;
    while (i < email.length) {
        if (email[i] === '@') {
            atCount++;
            atIndex = i;
        } else if (email[i] === '.') {
            dotCount++;
            dotIndex = i;
        }
        i++;
    }
    if (atCount !== 1 || dotCount < 1 || atIndex === 0 || dotIndex === email.length - 1 || atIndex > dotIndex) {
        return false;
    }
    return true;
}
export { validateEmail1, validateEmail2, validateEmail3, validateEmail4, validateEmail5 };
