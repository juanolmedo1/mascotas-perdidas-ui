import differenceInSeconds from 'date-fns/differenceInSeconds';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import differenceInHours from 'date-fns/differenceInHours';
import differenceInDays from 'date-fns/differenceInDays';
import differenceInMonths from 'date-fns/differenceInMonths';
import differenceInYears from 'date-fns/differenceInYears';
import { format } from 'date-fns';

const formatDate = date => {
  return format(new Date(date), 'HH:mm - dd/M/yy');
};

const formatBirthDate = date => {
  return format(new Date(date), 'dd/MM/yyyy');
};

const transformToDate = date => {
  const dateSplitted = date.split('/');
  const day = dateSplitted[0];
  const month = dateSplitted[1];
  const year = dateSplitted[2];
  return new Date(year, month - 1, day);
};

const difference = creationDate => {
  const secondsDifference = differenceInSeconds(
    new Date(Date.now()),
    new Date(creationDate)
  );
  if (secondsDifference < 60) {
    return `Hace ${secondsDifference} seg`;
  } else {
    const minutesDifference = differenceInMinutes(
      new Date(Date.now()),
      new Date(creationDate)
    );
    if (minutesDifference < 60) {
      return `Hace ${minutesDifference} min`;
    } else {
      const hoursDifference = differenceInHours(
        new Date(Date.now()),
        new Date(creationDate)
      );
      if (hoursDifference < 24) {
        if (hoursDifference === 1) {
          return `Hace ${hoursDifference} hora`;
        }
        return `Hace ${hoursDifference} horas`;
      } else {
        const daysDifference = differenceInDays(
          new Date(Date.now()),
          new Date(creationDate)
        );
        if (daysDifference < 30) {
          if (daysDifference === 1) {
            return `Hace ${daysDifference} día`;
          }
          return `Hace ${daysDifference} dias`;
        } else {
          const monthsDifference = differenceInMonths(
            new Date(Date.now()),
            new Date(creationDate)
          );
          if (monthsDifference < 12) {
            if (monthsDifference === 1) {
              return `Hace ${monthsDifference} mes`;
            }
            return `Hace ${monthsDifference} meses`;
          } else {
            const yearsDifference = differenceInYears(
              new Date(Date.now()),
              new Date(creationDate)
            );
            if (yearsDifference === 1) {
              return `Hace ${yearsDifference} año`;
            }
            return `Hace ${yearsDifference} años`;
          }
        }
      }
    }
  }
};

export default {
  difference,
  formatDate,
  formatBirthDate,
  transformToDate
};
