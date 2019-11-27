/**
 * 时间日期工具模块
 */

export default {
  /**
   * 返回时间日期的字符串描述
   * @param {number}} timestamp 可选的时间戳
   */
  timeStr(timestamp) {
    let time = timestamp
      ? new Date(timestamp)
      : new Date();
    return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  }
}