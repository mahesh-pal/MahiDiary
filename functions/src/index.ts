import * as functions from 'firebase-functions';

export const createSummary = functions.firestore.document('/blogs/{title}/content/{contentTitle}')
.onCreate(async (snap, context) => {
  const content = snap.data().content;
  const summary = content.split('\n').slice(0, 2).join('\n');
  const parent = snap.ref.parent.parent;
  const data = (await parent?.get())?.data();

  //const newChange = {title: data?.title,summary:'summary'};
  await parent?.update({summary});
});
