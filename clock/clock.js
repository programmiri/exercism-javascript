function dateToString(date) {
  return date.toTimeString().slice(0, 5);
}

export function at(hour = 0, minutes = 0) {
  const baseDate = new Date();
  baseDate.setHours(hour, minutes);

  return {
    toString: function() {
      return dateToString(baseDate);
    },

    plus: function(minToAdd) {
      baseDate.setMinutes(minToAdd + minutes);
      return dateToString(baseDate);
    },

    minus: function(minToSub) {
      baseDate.setMinutes(minutes - minToSub);
      return dateToString(baseDate);
    },

    equals: function(clock) {
      return dateToString(baseDate) == clock.toString();
    },
  };
}
