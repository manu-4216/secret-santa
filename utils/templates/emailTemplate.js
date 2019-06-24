module.exports = ({ name = '', match = '', customMessage = '' }) => `
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

          <p style="border: 1px solid #b0c3af; padding: 5px; background-color: #e9eaea80">${customMessage}</p>

          <p style="color: rgb(0, 109, 106);">Your Secret Santa Target is <span style="font-weight: bold; color: crimson;">${match}</span>!</p>

          <p style="color: rgb(0, 109, 106); font-size: 12px;">
            Secret Santa does not incorporate these data to any file. Once sent, the email and its contents will be
              automatically deleted.
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  `;
