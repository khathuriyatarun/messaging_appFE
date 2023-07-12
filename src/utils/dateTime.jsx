export const formateDateTimeforChats = (dateTime) => {
    const utcDateTime = new Date(dateTime);
    const localDateTime = new Date(utcDateTime.getTime() + utcDateTime.getTimezoneOffset() * 60000);
  
    const now = new Date();
    const timeDiff = now - localDateTime;
    const oneMinute = 60 * 1000;
    const oneDay = 24 * 60 * 60 * 1000;
  
    if (timeDiff < oneMinute) {
      return 'Now';
    } else if (
      localDateTime.getDate() === now.getDate() &&
      localDateTime.getMonth() === now.getMonth() &&
      localDateTime.getFullYear() === now.getFullYear()
    ) {
      return new Date(localDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (
      localDateTime.getDate() === now.getDate() - 1 &&
      localDateTime.getMonth() === now.getMonth() &&
      localDateTime.getFullYear() === now.getFullYear()
    ) {
      return 'Yesterday';
    } else if (timeDiff < 7 * oneDay) {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const day = days[localDateTime.getDay()];
      return day;
    } else {
      const month = (localDateTime.getMonth() + 1).toString().padStart(2, '0');
      const day = localDateTime.getDate().toString().padStart(2, '0');
      const year = localDateTime.getFullYear().toString().slice(-2);
      return `${month}/${day}/${year}`;
    }
  }