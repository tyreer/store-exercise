import React, { useState } from "react";
import { func, number } from "prop-types";
import styled from "styled-components";
import { formatCurrency } from "../../utils/utils";
import { productListType } from "../../propTypes/types";

const VoucherFormStyles = styled.div`
  input {
    margin: ${({ theme }) => theme.gutter};
    padding: 0.5rem;
    border: 1px solid black;
  }
  button {
    padding: 1rem;
    display: block;
    background: black;
    color: white;
  }
`;

const VoucherForm = ({ cartTotal, setCartTotal, cartContents }) => {
  const [applied, setApplied] = useState(false);
  const [formValue, setFormValue] = useState("");
  const [formValid, setFormValid] = useState(false);

  // Voucher definitions
  const voucherCondition15 =
    cartContents.some(item => item.category.includes("Footwear")) &&
    cartTotal > 7500;
  const voucherCondition10 = cartTotal > 5000;
  const voucherCondition5 = cartTotal > 500;

  // Apply only best possible voucher
  let voucherDiscount = 500;
  if (voucherCondition15) {
    voucherDiscount = 1500;
  } else if (voucherCondition10) {
    voucherDiscount = 1000;
  }

  // Set discount code
  let discountCode;
  switch (voucherDiscount) {
    case 1000:
      discountCode = "10_OFF";
      break;
    case 1500:
      discountCode = "15_OFF";
      break;
    default:
      discountCode = "5_OFF";
  }

  // Handle form submit
  const handleSubmit = e => {
    e.preventDefault();

    const submitDiscount = () => {
      setCartTotal(cartTotal - voucherDiscount);
      setApplied(true);
      setFormValid(true);
    };

    switch (formValue) {
      case "5_OFF":
        voucherCondition5 && submitDiscount();
        break;
      case "10_OFF":
        voucherCondition10 && submitDiscount();
        break;
      case "15_OFF":
        voucherCondition15 && submitDiscount();
        break;
      default:
        setApplied(true);
    }
  };

  // Determine message to display after submitting form
  const postSubmitMessage = formValid ? (
    `Your ${formatCurrency(voucherDiscount)} discount has been applied`
  ) : (
    <span style={{ color: "red" }}>Invalid code</span>
  );

  return (
    <VoucherFormStyles>
      {voucherCondition5 && !formValid && (
        <>
          <p>
            {`You qualify for a ${formatCurrency(voucherDiscount)} discount.`}
          </p>
          <p>
            {`Use
          code: ${discountCode}`}
          </p>
        </>
      )}
      {applied && <p>{postSubmitMessage}</p>}

      {cartTotal > 0 && (
        <form className="form">
          <label htmlFor="voucher">
            Voucher code:
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
            Apply voucher code
          </button>
        </form>
      )}
    </VoucherFormStyles>
  );
};

VoucherForm.propTypes = {
  cartContents: productListType.isRequired,
  cartTotal: number.isRequired,
  setCartTotal: func.isRequired
};

export default VoucherForm;
