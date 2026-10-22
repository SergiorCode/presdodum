// Selectors for the local demonstration. Production requires server-side authorization.
export function permittedDocuments(documents,role,profile,permissions){
  if(role!=='company')return documents;
  return documents.filter(d=>d.allowed&&(d.id!=='constancia'||Boolean(profile.consent&&permissions.medicalAuthorized)));
}
export function permittedRequest(requests,selectedId,role,personId='PR-00271'){
  const permitted=role==='company'?requests:requests.filter(r=>r.person===personId);
  return permitted.find(r=>r.id===selectedId)||permitted[0];
}
