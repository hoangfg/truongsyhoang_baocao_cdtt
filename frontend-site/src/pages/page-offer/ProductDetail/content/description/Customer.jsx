import React from "react";

export default function Customer() {
  return (
    <li className="has-child">
      <a href="#0" className="icon-small">
        Custom
      </a>
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>Size</th>
              <th>
                Bust
                <span className="mini-text">
                  {"{"}cm{"}"}
                </span>
              </th>
              <th>
                Waist
                <span className="mini-text">
                  {"{"}cm{"}"}
                </span>
              </th>
              <th>
                Hip
                <span className="mini-text">
                  {"{"}cm{"}"}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>XS</td>
              <td>82.5</td>
              <td>62</td>
              <td>87.5</td>
            </tr>
            <tr>
              <td>s</td>
              <td>85</td>
              <td>67.5</td>
              <td>89</td>
            </tr>
            <tr>
              <td>M</td>
              <td>87.5</td>
              <td>67.5</td>
              <td>93</td>
            </tr>
            <tr>
              <td>L</td>
              <td>90</td>
              <td>72.5</td>
              <td>98</td>
            </tr>
            <tr>
              <td>XL</td>
              <td>93</td>
              <td>77.5</td>
              <td>103</td>
            </tr>
          </tbody>
        </table>
      </div>
    </li>
  );
}
