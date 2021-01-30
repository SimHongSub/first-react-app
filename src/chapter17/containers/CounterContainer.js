import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../actions/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

const mapStateToProps = (state) => ({
  number: state.counter.number,
});

const mapDispatchToProps = {
  increase,
  decrease,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
