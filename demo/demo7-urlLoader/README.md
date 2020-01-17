# webpack-learning
webpack从简到深，一步步实战代码例子

- urlloader包含两个功能
1. 如果文件小于limit，则转换成内容字符串（图片转成base64），插入js中。
2. 如果文件大于limit，则用file-loader更改文件名为loader配置的filename，并将文件复制到out.path下
