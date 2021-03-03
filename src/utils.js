export const getNameInitials = (name) => {
  const splitName = name.toUpperCase().split(" ");

  if (splitName.length > 1) {
    return splitName[0][0] + splitName[1][0];
  }

  return splitName[0][0];
};

export function transformToArrWithId(snapVal) {
  return snapVal
    ? Object.keys(snapVal).map((contactId) => {
        return {
          ...snapVal[contactId],
          id: contactId,
          label: snapVal[contactId].name + " - " + snapVal[contactId].email,
          value: snapVal[contactId].email,
        };
      })
    : [];
}

export function chatsToArr(snapVal) {
  return snapVal
    ? Object.keys(snapVal).map((chatId) => {
        return {
          ...snapVal[chatId],
          id: chatId,
        };
      })
    : [];
}
