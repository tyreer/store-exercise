import React, { useState } from "react";
import { formatCurrency } from "../utils/utils";

const Voucher = ({ cartTotal, setCartTotal, cartContents }) => {
  const [applied, setApplied] = useState(false);
  const [formValue, setFormValue] = useState("");
  const [formValid, setFormValid] = useState(false);
  const voucherP0 =
    cartContents.some(item => item.category.includes("Footwear")) &&
    cartTotal > 7500;
  const voucherP1 = cartTotal > 5000;
  const voucherP2 = cartTotal > 500;

  let voucherDiscount = 500;
  if (voucherP0) {
    voucherDiscount = 1500;
  } else if (voucherP1) {
    voucherDiscount = 1000;
  }

  let code = "";
  switch (voucherDiscount) {
    case 500:
      code = "5_OFF";
      break;
    case 1000:
      code = "10_OFF";
      break;
    case 1500:
      code = "15_OFF";
      break;
    default:
      return;
  }

  const postSubmitMessage = formValid
    ? `Your ${formatCurrency(voucherDiscount)} discount has been applied`
    : `Invalid code`;

  const handleSubmit = e => {
    e.preventDefault();
    switch (formValue) {
      case "5_OFF":
        if (voucherP2) {
          setCartTotal(cartTotal - voucherDiscount);
          setApplied(true);
          setFormValid(true);
        }
        break;
      case "10_OFF":
        if (voucherP1) {
          setCartTotal(cartTotal - voucherDiscount);
          setApplied(true);
          setFormValid(true);
        }
        break;
      case "15_OFF":
        if (voucherP0) {
          setCartTotal(cartTotal - voucherDiscount);
          setApplied(true);
          setFormValid(true);
        }
        break;
      default:
    }
    setApplied(true);
  };

  //   eslint-disable-next-line consistent-return
  return (
    <>
      {cartTotal > 500 && (
        <p>
          {`You qualify for a ${formatCurrency(voucherDiscount)} discount. Use
          code: ${code}`}
        </p>
      )}
      {applied && <p>{postSubmitMessage}</p>}

      {cartTotal > 0 && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="voucher">
            Voucher:
            <input
              id="voucher"
              type="text"
              value={formValue}
              onChange={e => setFormValue(e.target.value)}
            />
          </label>
          <button
            type="submit"
            onClick={e => handleSubmit(e)}
            disabled={applied && formValid}
          >
            Apply voucher
          </button>
        </form>
      )}
    </>
  );
};

export default Voucher;
