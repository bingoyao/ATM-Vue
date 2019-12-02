/**
 * 日志工具模块
 */
import TimeHelper from './TimeHelper';

export default {
  /**
   * 返回可打印的日志记录
   * @param {object} param0 日志描述
   */
  log({
    accountNumber,
    transactionType,
    amount,
    transTo
  }) {
    let time = TimeHelper.timeStr();
    accountNumber = accountNumber.slice(0, 10) + '*'.repeat(6) + accountNumber.slice(16);
    transactionType = transactionType.toUpperCase();
    amount = `$ ${amount}`;
    transTo = transTo || '-';
    if(transTo!=='-'){
      transTo = transTo.slice(0,10) + '*'.repeat(6) + transTo.slice(16);
    }
    return {
      time, 
      accountNumber, 
      transactionType, 
      amount, 
      transTo
    };
  },
  /**
   * 返回日志记录的字符串描述
   * @param {object} record 日志描述
   */
  logStr(record){
    record = this.log(record);
    return `Time: ${record.time}
            AccountNumber: ${record.accountNumber}
            TransactionType: ${record.transactionType}
            Amount: ${record.amount}
            TransTo: ${record.transTo}`;
  }
}