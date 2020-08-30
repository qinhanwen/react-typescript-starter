module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['build', 'ci', 'chore', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'],
    ],
  },
}

//  · feat：新增feature
//  · fix：修复bug
//  · docs：仅仅修改文档，比如README，CHANGLOG，CONTRIBUTE等
//  · style：仅仅修改了空格、格式缩进、逗号等，不改变逻辑
//  · reafactor：代码重构，没有新加功能或修复bug
//  · chore：改变构建流程、或增加依赖库、工具等
//  · perf：优化相关，比如提升性能、体验
//  · test：测试用例，包括单元测试、集成测试等
//  · revert：回滚到上一个版本
//  · build：影响构建过程和外部依赖比如webpack和npm
//  · ci：影响持续集成的配置文件
