function isOneEditAway1(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  if (Math.abs(len1 - len2) > 1) {
    return false;
  }
  let edits = 0;
  let i = 0;
  let j = 0;
  while (i < len1 && j < len2) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
    } else {
      edits++;
      if (len1 > len2) {
        i++;
      } else if (len2 > len1) {
        j++;
      } else {
        i++;
        j++;
      }
    }
    if (edits > 1) {
      return false;
    }
  }
  if (i < len1 || j < len2) {
      edits++;
  }
  return edits <= 1;
}
function isOneEditAway2(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    if (Math.abs(len1 - len2) > 1) {
        return false;
    }
    let edits = 0;
    let i = 0;
    let j = 0;
    while (i < len1 && j < len2) {
        if (str1[i] === str2[j]) {
            i++;
            j++;
        } else {
            edits++;
            if (len1 > len2) {
                i++;
            } else if (len2 > len1) {
                j++;
            } else {
                i++;
                j++;
            }
        }
        if (edits > 1) {
            return false;
        }
    }
    if (i < len1 || j < len2) {
        edits++;
    }
    return edits <= 1;
}
function isOneEditAway3(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    if (Math.abs(len1 - len2) > 1) {
        return false;
    }
    let edits = 0;
    let i = 0;
    let j = 0;
    while (i < len1 && j < len2) {
        if (str1[i] === str2[j]) {
            i++;
            j++;
        } else {
            edits++;
            if (len1 > len2) {
                i++;
            } else if (len2 > len1) {
                j++;
            } else {
                i++;
                j++;
            }
        }
        if (edits > 1) {
            return false;
        }
    }
    if (i < len1 || j < len2) {
        edits++;
    }
    return edits <= 1;
}
function isOneEditAway4(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    if (Math.abs(len1 - len2) > 1) {
        return false;
    }
    let edits = 0;
    const arr1 = str1.split('');
    const arr2 = str2.split('');
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            i++;
            j++;
        } else {
            edits++;
            if (arr1.length > arr2.length) {
                arr1.splice(i, 1);
            } else if (arr2.length > arr1.length) {
                arr2.splice(j, 1);
            } else {
                arr1.splice(i, 1);
                arr2.splice(j, 1);
            }
        }
        if (edits > 1) {
            return false;
        }
    }
    if (i < arr1.length || j < arr2.length) {
        edits++;
    }
    return edits <= 1;
}
function isOneEditAway5(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    if (Math.abs(len1 - len2) > 1) {
        return false;
    }
    let edits = 0;
    const charCounts = {};
    for (let char of str1) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }
    for (let char of str2) {
        if (charCounts[char]) {
            charCounts[char]--;
        } else {
            edits++;
        }
    }
    let remaining = 0;
    for (let char in charCounts) {
        remaining += charCounts[char];
    }
    return edits + remaining <= 1;
}
export { isOneEditAway1, isOneEditAway2, isOneEditAway3, isOneEditAway4, isOneEditAway5 };
