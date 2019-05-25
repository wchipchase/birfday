import birfdayData from '../../helpers/data/birfdayData';
import util from '../../helpers/util';

const birfDomStringBuilder = (uid) => {
  birfdayData.getBirfdayByUid(uid).then((birthday) => {
    let domString = `<h1>${birthday.date}</h1>`;
    domString += `<img src = ${birthday.imageUrl}>`;
    domString += `<h2>${birthday.location}@ ${birthday.time}`;
    util.printToDom('event', domString);
  }).catch(err => console.error('could not get birfday', err));
};

export default { birfDomStringBuilder };
