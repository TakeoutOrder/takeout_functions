import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'

admin.initializeApp()

/**
 * Firebase Collection 'admin_users' にドキュメントが追加された際に, admin claim を追加する
 */
export const addAdminClaim = functions.firestore.document('admin_users/{docID}').onCreate((snapshot => {
  const newAdminUser = snapshot.data()
  if (newAdminUser === undefined) {
    return
  }
  setAdminClaim(newAdminUser.uid, true)
}))

/**
 * Firebase Collection 'admin_users' からドキュメントが削除された際に, admin claim を削除する
 */
export const removeAdminClaim = functions.firestore.document('admin_users/{docID}').onDelete(snapshot => {
  const deleteAdminUser = snapshot.data()
  if (deleteAdminUser === undefined) {
    return
  }
  setAdminClaim(deleteAdminUser.uid, false)
})

function setAdminClaim(uid: string, is_admin: boolean) {
  admin.auth().setCustomUserClaims(uid, { admin: is_admin }).then(
  ).catch(
    () => console.warn('error at setAdminClaim (uid = ' + uid + ")")
  )
}

