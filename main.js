import { ofetch } from 'ofetch';

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

try {

  const res = await ofetch('/api/graphql', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: {
  
      query: `
      query EcommerceHeaderCustomerInfo($customerId: String,) {
        cdmCustomer(customerId: $customerId) {
          customerType
          contactInformation {
            name {
              firstName
            }
          }
        }
      }
    `,
      variables: {
        customerId: getCookie('CdId')
      }
    }
  })

  document.querySelector('.container').textContent = JSON.stringify(res.data, null, 2);
} catch {
  console.log('cant fetch user info');
}
