
$("#submit").click(function () {  
  let checkboxTittle = document.querySelector('.styled-checkbox:checked').value;   
 
  const lastName = $("#lastName").val();
  const firstName = $("#firstName").val();
  const phoneNumber = $("#phoneNumber").val();
  const address = $("#address").val();
  const country = $("#countries").val();
  const province = $("#province").val();
  const emailAddress = $("#emailAddress").val();
  const birthDate = $("#birthDate").val();  
  const lineInformation = document.querySelector('.line-information:checked').value;


  const str = `<h4>You Have Entered</h4>
  <table class = "modal-confirmation">
  <tr>
    <td>Title </td>
    <td>: ${checkboxTittle}</td>
  </tr>
  <tr>
    <td>Last Name </td>
    <td>: ${lastName}</td>
  </tr>
  <tr>
    <td>First Name</td>
    <td>: ${firstName}</td>
    </tr>
  <tr>
    <td>Phone Number</td>
    <td>: ${phoneNumber}</td>
  </tr>
  <tr>
    <td>Address</td>
    <td>: ${address}</td>
  </tr>
  <tr>
    <td>Country</td>
    <td>: ${country}</td>
  </tr>
  <tr>
    <td>Province</td>
    <td>: ${province}</td>
  </tr>
  <tr>
    <td>Email Address</td>
    <td>: ${emailAddress}</td>
  </tr>
  <tr>
    <td>Date of Birth</td>
    <td>: ${birthDate}</td>
  </tr>
  <tr>
    <td>use of Information </td>
    <td>: ${lineInformation}</td>
  </tr>
</table>
  `;
  $("#modal_body").html(str);
});