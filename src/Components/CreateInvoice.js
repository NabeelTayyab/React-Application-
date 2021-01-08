import React, { Component, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CreateInvoice.css";
import { Button, Input } from "reactstrap";
import { Table } from "reactstrap";
const CreateInvoice = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="create-invoice-background">
      <div className="create_invoice">
        <div className="create_invoice_text">
          <h3>Create Invoice</h3>
        </div>
        <div className="generate_from">
          <select className="gen_from">
            <option value selected="selected">
              Generate From
            </option>
            <option value>Invoicera Projects</option>
          </select>
        </div>
      </div>

      <div className="invoice_background">
        <div className="upper_divs">
          <div className="client-col">
            <div className="client-text">
              <span style={{ color: "red" }}>*</span>Client
            </div>
            <div>
              <select className="client-types">
                <option value selected="selected">
                  --Select--
                </option>
              </select>
            </div>
            <div className="address">Address</div>
            <div>
              <textarea className="address_textarea"></textarea>
            </div>
          </div>
          <div className="invoice_col">
            <div className="invoice_title">Invoice Title</div>
            <div className="txtbox1">
              <Input type="text" />
            </div>
            <div className="purchase_invoice">
              <div className="purchase_title">Purchase Order No.</div>

              <div className="invoice_no">
                <span style={{ color: "red" }}>*</span>Invoice No.
              </div>
            </div>
            <div className="txtboxes">
              <div className="txtbox2">
                <Input type="text" />
              </div>
              <div className="txtbox3">
                <Input type="text" defaultValue={"INV:100"} />
              </div>
            </div>

            <div className="staff-text">Staff</div>
            <div>
              <select className="staff-types">
                <option value selected="selected">
                  --You--
                </option>
              </select>
            </div>
          </div>
          <div className="payment_column">
            <div className="client-text">Payment Terms</div>
            <div>
              <select className="client-types">
                <option value={0}>Due On Receipt</option>
                <option value={7}>Net-7</option>
                <option value={10}>Net-10</option>
                <option value={15}>Net-15</option>
                <option value={20}>Net-20</option>
                <option value={30}>Net-30</option>
                <option value={45}>Net-45</option>
                <option value={50}>Net-50</option>
                <option value={60}>Net-60</option>
                <option value={90}>Net-90</option>
                <option value={120}>Net-120</option>
              </select>
            </div>
            <div className="client-text" style={{ marginTop: 10 }}>
              Late Fee
            </div>
            <div>
              <select className="client-types">
                <option value selected="selected">
                  --No Late Fee--
                </option>
              </select>
            </div>
            <div className="invoice_due">
              <div className="invoice_date">Invoice Date</div>

              <div className="due_date">Due Date</div>
            </div>
            <div className="txtboxes2">
              <div className="txtbox4">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div className="txtbox5">
                <DatePicker onChange={(date) => setStartDate(date)} />
              </div>
            </div>
          </div>
        </div>

        {/* <form>
              <div className="client_add">
                <div className="client">
                  <label>
                    <span>*</span>Client
                  </label>
                  <div className="txtbox">
                    <select style={{ width: 262 }}>
                      <option value selected="selected">
                        --Select--
                      </option>
                    </select>
                  </div>
                </div>
                <div className="address">
                  <label>Address</label>
                  <div className="txtarea">
                    <textarea style={{ width: 262 }}></textarea>
                  </div>
                </div>
              </div>

              <div className="invoice">
                <label>Invoice Title</label>
                <div className="txtbox1">
                  <input
                    type="text"
                    autoComplete="off"
                    style={{ width: 275 }}
                  />
                </div>

                <div className="purchase_invoice">
                  <div className="purchase">
                    <div className="purchase_inner">
                      <label>Purchase Order No</label>
                      <div className="txtbox2">
                        <input type="text" autoComplete="off" />
                      </div>
                    </div>
                    <div className="invoice_no">
                      <label>
                        {" "}
                        <span>*</span>Invoice
                      </label>
                      <div className="txtbox3">
                        <input type="text" autoComplete="off" />
                      </div>
                    </div>
                  </div> */}

        {/* <div className="invoice_no">
                    <label>
                      {" "}
                      <span>*</span>Invoice
                    </label>
                    <div className="txtbox3">
                      <input type="text" autoComplete="off" />
                    </div>
                  </div> */}
        {/* </div>
                <div className="staff">
                  <label>Staff</label>
                  <div className="slctbox1">
                    <select>
                      <option value>--You--</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="payment">
                <label>Payment Terms</label>
                <div className="slctbox2">
                  <select>
                    <option value={0}>Due On Receipt</option>
                    <option value={7}>Net-7</option>
                    <option value={10}>Net-10</option>
                    <option value={15}>Net-15</option>
                    <option value={20}>Net-20</option>
                    <option value={30}>Net-30</option>
                    <option value={45}>Net-45</option>
                    <option value={50}>Net-50</option>
                    <option value={60}>Net-60</option>
                    <option value={90}>Net-90</option>
                    <option value={120}>Net-120</option>
                  </select>
                </div>
                <div className="latefee">
                  <label>Late Fee</label>
                  <div className="slctbox1">
                    <select>
                      <option value selected="selected">
                        --No Late Fee--
                      </option>
                    </select>
                  </div>
                </div>
                <div className="invoice_due">
                  <div className="invoice_date">
                    <label>Invoice Date</label>
                    <div className="txtbox2">
                      <input type="text" autoComplete="off" />
                    </div>
                  </div>

                  <div className="due_date">
                    <label> Due Date</label>
                    <div className="txtbox3">
                      <input type="text" autoComplete="off" />
                    </div>
                  </div>
                </div>
              </div>
              </form>
            </div> */}

        <div className="table1">
          <Table hover bordered cellSpacing={0} cellPadding={0}>
            <thead>
              <tr className="head">
                <th className="col2">Product/Service</th>
                <th className="col3">Description </th>
                <th className="col4">Unit Cost</th>
                <th className="col5">Quantity</th>
                <th className="col6" colSpan={2}>
                  Discount
                </th>
                <th className="col7">Tax 1</th>
                <th className="col8">Tax 2</th>
                <th className="col9">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="col2" valign="top">
                  <select>
                    <option value="addNewTax">Add New</option>{" "}
                    <option value selected="selected">
                      --Select--
                    </option>{" "}
                  </select>
                </td>

                <td className="col3" valign="top">
                  <textarea
                    cols
                    rows
                    className="desc_text"
                    style={{
                      height: 40,
                      paddingTop: 0,
                      paddingBottom: 0,
                    }}
                    defaultValue={""}
                  />
                </td>
                <td className="col4" valign="top">
                  <input type="text" className="txt" alt />
                </td>
                <td className="col5" valign="top">
                  <input type="text" className="txt" alt />
                </td>

                <td className="col6" align="left" valign="top">
                  <div className="outer_input">
                    <input type="text" className="input_discount1" />
                  </div>
                </td>
                <td className="col6_1" align="left" valign="top">
                  <div className="input_bg_text2_outer">
                    <select style={{ border: "none" }}>
                      <option value="Percent">%</option>
                      <option value="Fixed">Flat</option>
                    </select>
                  </div>
                </td>
                <td className="col7" valign="top">
                  <div className="input_bg_text1_outer">
                    <select style={{ border: "none" }}>
                      {" "}
                      <option value="addNewTax">Add New</option>{" "}
                      <option value selected="selected">
                        --Select--
                      </option>{" "}
                    </select>
                  </div>
                </td>

                <td className="col8" valign="top">
                  <div className="input_bg_text1_outer">
                    <select style={{ border: "none" }}>
                      {" "}
                      <option value="addNewTax">Add New</option>{" "}
                      <option value selected="selected">
                        --Select--
                      </option>{" "}
                    </select>
                  </div>
                </td>
                <td className="col9 last" valign="top">
                  <input
                    type="text"
                    readOnly="readonly"
                    className="txt"
                    alt
                    style={{ textAlign: "center" }}
                    defaultValue={0.0}
                  />
                </td>
              </tr>

              <tr>
                <td className="col2" valign="top">
                  <select>
                    <option value="addNewTax">Add New</option>{" "}
                    <option value selected="selected">
                      --Select--
                    </option>{" "}
                  </select>
                </td>

                <td className="col3" valign="top">
                  <textarea
                    className="desc_text"
                    cols
                    rows
                    style={{
                      height: 40,
                      paddingTop: 0,
                      paddingBottom: 0,
                    }}
                    defaultValue={""}
                  />
                </td>
                <td className="col4" valign="top">
                  <input type="text" className="txt" alt />
                </td>
                <td className="col5" valign="top">
                  <input type="text" className="txt" alt />
                </td>

                <td className="col6" align="left" valign="top">
                  <div className="outer_input">
                    <input type="text" className="input_discount1" />
                  </div>
                </td>
                <td className="col6_1" align="left" valign="top">
                  <div className="input_bg_text2_outer">
                    <select style={{ border: "none" }}>
                      <option value="Percent">%</option>
                      <option value="Fixed">Flat</option>
                    </select>
                  </div>
                </td>
                <td className="col7" valign="top">
                  <div className="input_bg_text1_outer">
                    <select style={{ border: "none" }}>
                      {" "}
                      <option value="addNewTax">Add New</option>{" "}
                      <option value selected="selected">
                        --Select--
                      </option>{" "}
                    </select>
                  </div>
                </td>

                <td className="col8" valign="top">
                  <div className="input_bg_text1_outer">
                    <select style={{ border: "none" }}>
                      {" "}
                      <option value="addNewTax">Add New</option>{" "}
                      <option value selected="selected">
                        --Select--
                      </option>{" "}
                    </select>
                  </div>
                </td>
                <td className="col9 last" valign="top">
                  <input
                    type="text"
                    readOnly="readonly"
                    className="txt"
                    alt
                    style={{ textAlign: "center" }}
                    defaultValue={0.0}
                  />
                </td>
              </tr>
              <tr>
                <td className="col2" valign="top">
                  <select>
                    <option value="addNewTax">Add New</option>{" "}
                    <option value selected="selected">
                      --Select--
                    </option>{" "}
                  </select>
                </td>

                <td className="col3" valign="top">
                  <textarea
                    className="desc_text"
                    cols
                    rows
                    style={{
                      height: 40,
                      paddingTop: 0,
                      paddingBottom: 0,
                    }}
                    defaultValue={""}
                  />
                </td>
                <td className="col4" valign="top">
                  <input type="text" className="txt" alt />
                </td>
                <td className="col5" valign="top">
                  <input type="text" className="txt" alt />
                </td>

                <td className="col6" align="left" valign="top">
                  <div className="outer_input">
                    <input type="text" className="input_discount1" />
                  </div>
                </td>
                <td className="col6_1" align="left" valign="top">
                  <div className="input_bg_text2_outer">
                    <select style={{ border: "none" }}>
                      <option value="Percent">%</option>
                      <option value="Fixed">Flat</option>
                    </select>
                  </div>
                </td>
                <td className="col7" valign="top">
                  <div className="input_bg_text1_outer">
                    <select style={{ border: "none" }}>
                      {" "}
                      <option value="addNewTax">Add New</option>{" "}
                      <option value selected="selected">
                        --Select--
                      </option>{" "}
                    </select>
                  </div>
                </td>

                <td className="col8" valign="top">
                  <div className="input_bg_text1_outer">
                    <select style={{ border: "none" }}>
                      {" "}
                      <option value="addNewTax">Add New</option>{" "}
                      <option value selected="selected">
                        --Select--
                      </option>{" "}
                    </select>
                  </div>
                </td>
                <td className="col9 last" valign="top">
                  <input
                    type="text"
                    readOnly="readonly"
                    className="txt"
                    alt
                    style={{ textAlign: "center" }}
                    defaultValue={0.0}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="total_section">
          <div className="add_line">
            <a href="#">
              <span>
                <small className="add_line">Add a new line</small>
              </span>
            </a>
          </div>
          <div className="total">
            <ul>
              <li className="first">
                <label className="title">
                  <strong style={{ marginLeft: 100 }}>Subtotal:</strong>
                </label>
                <label className="price">
                  <input
                    type="text"
                    defaultValue={0.0}
                    style={{ marginLeft: 138, textAlign: "right" }}
                    className="hidden_field"
                    readOnly="readonly"
                  />
                </label>
              </li>

              <li className="second">
                <label className="title">
                  <strong style={{ marginLeft: 100 }}>Total:</strong>
                </label>
                <label className="price">
                  <input
                    type="text"
                    defaultValue={0.0}
                    style={{ marginLeft: 149, textAlign: "right" }}
                    className="hidden_field"
                    readOnly="readonly"
                  />
                </label>
              </li>
              <li className="final_total">
                <div className="net_balance">
                  <label className="title title_total">
                    <strong style={{ marginLeft: 100, fontSize: 18 }}>
                      Net Balance:
                    </strong>
                  </label>
                  <label className="price price_total">
                    <input
                      type="text"
                      defaultValue={0.0}
                      style={{ marginLeft: 94 }}
                      className="hidden_field_net_balance"
                      readOnly="readonly"
                    />
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="net_balance01">
          <div className="net_balance012">
            <div className="net_balance">
              <label className="title title_total">
                <strong style={{ marginLeft: 440, fontSize: 22 }}>
                  Gross Total:
                </strong>
              </label>
              <label className="price price_total">
                <input
                  type="text"
                  defaultValue={0.0}
                  style={{ marginLeft: 77 }}
                  className="hidden_field_net_balance"
                  readOnly="readonly"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="bor_none last_row">
          <input type="checkbox" className="check" />
          <label className="note">
            Allow partial payment for this invoice.
          </label>
        </div>

        <div className="options">
          <div className="head_row">
            <h3>OTHER OPTIONS</h3>
            <a href="#additionalData" className="help">
              &nbsp;
            </a>
            <div id="additionalData" style={{ display: "none" }}>
              {" "}
              <strong>Late Fee: </strong>A nominal charge is added to your
              invoice in case payment is not made on a due date.
              <br />
              <strong>Template: </strong>Selected template would be used for
              preview and print. You can set your default template from general
              preferences under Settings.
              <br />
              <strong>Schedule Invoice: </strong> Invoice can be scheduled to be
              sent automatically on any specific date.{" "}
            </div>
          </div>
        </div>
        <div className="con_main">
          <div className="con_lef">
            <div className="content_left">
              {" "}
              <div className="additional_options">
                {" "}
                <div
                  style={{ paddingLeft: 0, clear: "left", margin: 10 }}
                  className="col2 "
                >
                  <label style={{ marginTop: 20 }}>
                    Schedule this Invoice for
                  </label>
                  <div className="selectbox_bg">
                    <DatePicker

                      onChange={(date) => setStartDate(date)}
                      title="Click To Choose Date"
                      className="txt hasDatepicker"
                    />
                  </div>
                </div>{" "}
                <div
                  style={{ paddingLeft: 0, paddingTop: 19, margin: 10 }}
                  className="col1"
                >
                  <label>Template</label>
                  <div className="select_bg">
                    <select className="template-types">
                      <option value="Default_21" selected="selected">
                        Modern
                      </option>
                      <option value="Default_1">Classic</option>
                      <option value="Default_2">Imperial</option>
                      <option value="Default_3">Business Elegance</option>
                      <option value="Default_4">Corporate Essence</option>
                      <option value="Default_5">Creative</option>
                      <option value="Default_16">Customized Template</option>
                      <option value="Default_19">Professional</option>
                    </select>
                  </div>

                  {/*addition options ends*/}
                </div>{" "}
              </div>
            </div>
          </div>

          <div className="con_right">
            <div className="col11">
              <label>Terms &amp; Conditions </label>
            </div>
            <div>
              <textarea rows={5} cols={87} defaultValue={""} />
            </div>
            <div className="col22">
              <label>Invoice Notes</label>
            </div>
            <div>
              <textarea rows={5} cols={87} defaultValue={""} />
            </div>
          </div>
        </div>
        <div className="buttons_row">
          <div className="send">
            <Button color="success" size="lg" className="send1">
              Send by Email
            </Button>{" "}
          </div>
          <div className="save">
            <Button color="secondary" size="lg">
              Save As Draft
            </Button>{" "}
          </div>
        </div>

        <div className="legend_sec" id="legendId">
          {" "}
          <a className="cancel">&nbsp;</a>
          <ul>
            <li style={{ background: "none", padding: 0 }}>
              # indicates Compound Tax
            </li>
            <li style={{ background: "none", padding: 0 }}>
              <span>*</span>&nbsp;fields are mandatory
            </li>
            <li>
              Save as Draft- The Invoice will be Saved as Draft and can only be
              viewed at your end. Your client will not be able to view until it
              is sent.{" "}
            </li>
            <li>
              Send by Mail- The Invoice will be Sent to the client by Email.{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;
