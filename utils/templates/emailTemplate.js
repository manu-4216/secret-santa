const getCustomMessage = customMessage => {
  if (!customMessage) {
    return '';
  }

  return `<p style="border: 1px solid #b0c3af; padding: 5px; background-color: #e9eaea80">${customMessage}</p>`;
};

module.exports = ({ name = '', match = '', customMessage = '', url = '', wishlistUrl }) => `
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
          <p style="font-size: 16px;">Hi ${name}</p>

          ${getCustomMessage(customMessage)}

          <p style="color: rgb(0, 109, 106); font-size: 18px; font-weight: bold;">Your Secret Santa match is <span style="font-weight: bold; color: crimson;">${match}</span>!</p>

          <p style="color: rgb(0, 109, 106); padding-top: 15px;">
            You can edit your wish list anytime at this unique URL:
            <a href="${url}wishlist/${wishlistUrl}" style="color: rgb(0, 109, 106); display: block; text-decoration: underline; font-weight: bold; font-size: 13px;">
              ${url}wishlist/${wishlistUrl}
            </a>
          </p>

          <p style="color: rgb(0, 109, 106); font-size: 15px; padding-top: 20px;">
            PS: You can create your own Secret Santa <a style="color: rgb(0, 109, 106); text-decoration: underline; font-weight: bold;" href="${url}">here</a>.
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  `;
