import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const married = sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age ? (
        <p className="Person__age">{`I am ${age}`}</p>
      ) : (null)}
      {isMarried ? (
        <p className="Person__partner">{`${partnerName} is my ${married}`}</p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
