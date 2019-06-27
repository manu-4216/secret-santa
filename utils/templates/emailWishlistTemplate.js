module.exports = ({ wishlist = [], url = '' }) => `
  <table style="border-collapse: collapse;">
    <tbody>
      <tr
        style="background-color: crimson; font-size: 26px; font-family: monospace; color: cornsilk; padding: 10px;">
        <th style="padding: 10px 20px; text-align: left;">Secret Santa
        </th>
      </tr>
      <tr
        style="background-color: linen; font-size: 17px; color: rgb(0, 109, 106); width: 500px; padding: 0px; font-family: monospace;">
        <td colspan="2" style="padding: 10px 20px; font-family: monospace;">
          <p style="font-size: 16px;">Hi again,</p>

          <p style="color: rgb(0, 109, 106); font-size: 18px;">Your Secret Santa match updated their wish list ideas:</p>

          <p style="font-weight: bold;">${wishlist}</p>

          <p style="color: rgb(0, 109, 106); padding-top: 14px; font-size: 14px;">
            Don't forget you can edit your own wish list anytime, at the URL received in the first email.
          </p>

          <p style="color: rgb(0, 109, 106); font-size: 15px; padding-top: 20px;">
            PS: You can create your own Secret Santa <a style="color: rgb(0, 109, 106); text-decoration: underline; font-weight: bold;" href="${url}">here</a>.
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  `;
