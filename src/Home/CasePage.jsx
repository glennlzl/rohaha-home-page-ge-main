import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Layout,
  Card,
  Button,
  Space,
  Form,
  Input,
  message,
  Typography,
  Divider,
  Row,
  Col,
} from 'antd';
import Header from './Header';
import { ArrowLeftOutlined } from '@ant-design/icons';

import Footer from './Footer';
import Banner from './Banner';
import DocumentTitle from 'react-document-title';

const { Content } = Layout;
const { Title, Text } = Typography;
// 示例案例数据
const caseDetails = {
  1: {
    title: '企业资源管理平台',
    platform: 'ResourceHub',
    background: 'ResourceHub 是一款企业资源管理平台，专注于物料、原料等资源的高效管理。随着企业供应链和生产流程的复杂性增加，管理和优化资源变得至关重要。ResourceHub 旨在通过全面的资源管理功能，帮助企业提升运营效率、降低成本并优化供应链管理。',
    description: '专注于物料、原料等资源的高效管理，帮助企业提升运营效率。',
    features: [
      '资源跟踪与管理： 实时跟踪和管理企业的物料和原料库存，支持条形码扫描和 RFID 技术，确保资源的准确记录和管理。',
      '库存优化： 提供智能库存预测和优化建议，帮助企业合理规划采购和库存，减少过剩和短缺情况。',
      '供应链整合： 集成供应链管理功能，支持供应商管理、采购订单跟踪和供应链可视化，提升供应链效率和透明度。',
      '采购管理： 提供采购流程管理，包括采购申请、审批、订单生成等功能，确保采购过程的规范和高效。',
      '数据分析与报告： 内置数据分析工具，生成资源使用、库存周转率等报告，帮助企业做出数据驱动的决策。',
      '自动警报和通知： 设置库存低于预设阈值时的自动警报，及时通知相关人员进行补货或调整采购计划。'
    ],
    price: '¥9999',
    image: '/images/asset_4.png',
    animation: '/images/资源管理.gif',
  },
  2: {
    title: '企业人事管理平台',
    platform: 'PeopleFlow',
    background: 'PeopleFlow 是一款专为企业设计的人事管理平台，旨在简化和优化人力资源管理。随着企业规模的扩大和人力资源需求的复杂化，企业需要一个全面的工具来管理员工信息、考勤、薪酬等方面的事务。PeopleFlow 提供了一整套解决方案，帮助企业提升人事管理效率和员工满意度。',
    description: '简化和优化人力资源管理，提高人事管理效率。',
    features: [
      '员工信息管理： 集中管理员工的基本信息、职位变动、培训记录等，支持数据的快速检索和更新，确保信息的准确性和完整性。',
      '考勤和排班： 提供考勤记录、排班安排和请假管理功能，支持自动生成考勤报表，帮助企业更好地管理员工的工作时间。',
      '薪酬管理： 处理薪资计算、工资单生成、税务计算等功能，支持自定义薪资结构和福利设置，确保薪资发放的准确性和合规性。',
      '培训和发展： 提供员工培训记录和发展规划功能，帮助企业跟踪员工培训进度，支持职业发展和能力提升。',
      '数据分析与报告： 提供详尽的人力资源数据分析和报告，包括员工流动率、考勤统计、薪酬分析等，帮助企业做出数据驱动的决策。',
      '合规性和安全性： 确保人事管理过程符合相关法律法规，提供数据加密和权限管理功能，保护员工信息的安全性。'
    ],
    price: '¥19999',
    image: '/images/asset_5.png',
    animation: '/images/人事管理.gif',
  },
  3: {
    title: '企业招聘管理平台',
    platform: 'RecruitMaster',
    background: 'RecruitMaster 是一款专为企业设计的招聘管理平台，旨在优化招聘流程、提高招聘效率。随着企业对优秀人才的需求增加，传统招聘方式往往效率低下，RecruitMaster 提供了一整套数字化解决方案，帮助企业更好地管理招聘流程、筛选候选人并快速填补职位空缺。',
    description: '优化招聘流程、提高招聘效率的专业平台。',
    features: [
      '职位发布与管理： 支持在多个招聘渠道发布职位信息，集中管理所有招聘职位，包括职位描述、要求和薪资信息等。',
      '简历筛选与管理： 提供简历自动筛选和关键字匹配功能，快速筛选符合职位要求的候选人，并集中管理简历和候选人信息。',
      '面试安排与管理： 支持面试安排、面试反馈收集和面试记录管理，优化面试流程，提升面试效率。',
      '招聘数据分析： 提供招聘数据分析和报告，包括招聘渠道效果、职位填补时间、候选人来源等，帮助企业优化招聘策略。',
      '候选人沟通： 内置候选人沟通工具，支持自动化邮件和消息发送，提升候选人体验和沟通效率。',
    ],
    price: '¥14999',
    image: '/images/asset_6.png',
    animation: '/images/招聘管理.gif',
  },
  4: {
    title: '企业服务部署平台',
    platform: 'DeployPro',
    background: 'DeployPro 是一款专为企业设计的服务部署平台，旨在简化和加速企业服务的部署过程。随着企业应用程序和服务的复杂性不断增加，传统的部署方式往往难以满足高效、可靠的部署需求。DeployPro 提供了一整套自动化和可视化的部署工具，帮助企业确保服务的快速上线和稳定运行。',
    description: '帮助企业简化和加速服务部署过程，确保服务的快速上线和稳定运行。',
    features: [
      '自动化部署： 支持自动化的服务部署流程，从代码打包、测试到上线，全流程自动化处理，减少人为操作错误。',
      '多环境支持： 提供开发、测试、生产等多环境的部署管理，确保服务在不同环境下的顺利切换和稳定运行。',
      '可视化管理： 提供可视化的部署流程和状态监控界面，帮助运维团队实时跟踪部署进度，快速发现和解决问题。',
      '版本控制与回滚： 支持服务版本的管理和回滚功能，当新版本出现问题时，可以快速恢复到稳定版本，减少停机时间。',
      '配置管理： 集中管理服务的配置文件，支持配置变更的自动应用和同步，确保各环境配置的一致性。',
      '日志管理与监控： 提供实时日志收集和监控功能，帮助团队快速定位和解决部署中的问题，提升部署可靠性。',
      '安全管理： 提供安全的部署管道，确保代码和数据在部署过程中的安全性，支持权限控制和审计日志。',
      '集成与扩展： 支持与企业现有的 CI/CD 工具、代码库、云平台的无缝集成，灵活扩展部署能力，满足不同规模企业的需求。'
    ],
    price: '¥8999',
    image: '/images/asset_7.png',
    animation: '/images/部署平台.gif',
  },
  5: {
    title: '企业人才测评系统',
    platform: 'TalentGauge',
    background: 'TalentGauge 是一款专为企业设计的人才测评系统，旨在通过科学、全面的评估方法，帮助企业识别、选拔和培养优秀人才。在现代企业中，准确评估员工的能力、潜力和适配度对于招聘、晋升和发展规划至关重要。TalentGauge 提供了一整套测评工具和数据分析功能，助力企业做出更加明智的人才决策。',
    description: '帮助企业识别、选拔和培养优秀人才的全面测评系统。',
    features: [
      '多维度评估： 提供基于能力、性格、职业兴趣、工作风格等多维度的测评工具，帮助企业全方位了解员工或候选人的素质。',
      '定制化测评方案： 支持根据企业的行业特点和岗位要求，定制化测评内容和指标，确保评估结果的针对性和准确性。',
      '在线测试与报告： 提供在线测评平台，员工或候选人可以随时随地进行测试，系统自动生成详细的评估报告，涵盖个人优势、发展建议等。',
      '潜力评估与人才梯队建设： 帮助企业评估员工的潜力，支持人才梯队建设和继任计划的制定，确保企业关键岗位的持续性和稳定性。',
      '数据分析与对比： 提供数据分析功能，支持横向对比不同员工或候选人的测评结果，帮助企业做出更科学的决策。',
      '整合历史数据： 支持整合员工的历史评估数据，跟踪员工的成长和发展路径，为企业的人才管理提供数据支持。',
      '安全与合规： 确保测评数据的隐私和安全，符合相关的法律法规，支持数据加密和权限管理。',
      '与HR系统集成： 无缝集成现有的人力资源管理系统，支持测评结果的导入和使用，提升整体人力资源管理效率。'
    ],
    price: '¥4999',
    image: '/images/asset_8.png',
    animation: '/images/人才.gif',
  },
  6: {
    title: 'Blog搭建工具',
    platform: 'BlogMaster',
    background: 'BlogMaster 是一款专为个人和企业设计的高效 Blog 搭建工具。随着内容营销和个人品牌的重要性日益提升，用户需要一个易于使用且功能强大的平台来展示自己的内容。BlogMaster 满足了这一需求，无需编程技能，用户就能快速创建和管理博客网站。',
    description: '这是一款高效便捷的Blog搭建工具，帮助用户快速创建和管理个人博客。',
    features: [
      '模板丰富： 提供多种风格的博客模板，适合不同领域和审美需求，用户可根据自己的喜好自由选择和定制。',
      '拖拽式编辑： 支持拖拽式页面编辑，用户可以轻松地添加、调整和删除内容模块，所见即所得，提升搭建效率。',
      'SEO优化： 内置 SEO 工具，帮助用户优化博客内容，提升在搜索引擎中的排名，吸引更多访问者。',
      '多平台发布： 支持将博客内容同步发布到多个平台，如社交媒体和内容聚合平台，扩大内容传播范围。',
      '数据分析： 提供详尽的访问数据统计和分析，帮助用户了解读者行为，优化内容策略。'
    ],
    price: '¥499',
    image: '/images/asset_1.png',
    animation: '/images/blog.gif',
  },
  7: {
    title: '开发者工具集成平台',
    platform: 'DevSync',
    background: 'DevSync 是一款专为开发者打造的工具集成平台，旨在简化开发流程，提高工作效率。随着技术栈的复杂化和开发需求的多样化，开发者需要一个集成多种开发工具的统一平台，以便高效地管理和协调各种开发任务。',
    description: '集成多种开发者工具的平台，提升开发效率，简化工作流程。',
    features: [
      '工具整合： 集成了主流的开发工具和服务，包括代码编辑器、版本控制、持续集成、项目管理等，提供统一的操作界面。',
      '自动化工作流： 支持设置自动化任务和工作流，例如自动部署、代码审查和测试，减少手动操作，提升开发效率。',
      '插件支持： 提供丰富的插件市场，允许用户根据需要扩展功能，支持各种编程语言和框架。',
      '团队协作： 内置团队协作功能，如任务分配、进度跟踪和实时沟通，帮助团队成员更好地协作和共享信息。',
      '数据分析和报告： 提供开发过程中的数据统计和报告，帮助用户跟踪项目进展、分析瓶颈，优化开发流程。'
    ],
    price: '¥999',
    image: '/images/asset_2.png',
    animation: '/images/开发集成.gif',
  },
  8: {
    title: '企业门户网站搭建工具',
    platform: 'PortaPro',
    background: 'PortaPro 是一款专为企业设计的门户网站搭建工具，旨在帮助企业快速建立功能全面、外观专业的企业门户网站。随着企业在线业务的扩展和品牌形象的重要性提升，PortaPro 提供了一站式解决方案，使企业能够轻松创建和管理其在线存在。',
    description: '帮助企业快速搭建专业的门户网站，支持多种模板和自定义功能。',
    features: [
      '专业模板： 提供多种企业级网站模板，涵盖行业特定需求，用户可以根据企业的品牌形象选择和定制模板。',
      '模块化设计： 支持模块化网站构建，用户可以根据需要添加和配置各种功能模块，如新闻发布、产品展示、员工专区等。',
      '内容管理系统： 内置强大的内容管理系统，允许用户轻松编辑和发布网站内容，无需技术背景即可操作。',
      '多语言支持： 支持多语言版本，帮助企业面向全球市场，提供本地化的用户体验。',
      '安全性和权限管理： 提供先进的安全性功能，包括数据加密和权限管理，确保企业信息和用户数据的安全。',
      '数据分析： 内置数据分析工具，实时监控网站流量和用户行为，帮助企业优化网站内容和结构，提高用户体验。'
    ],
    price: '¥2999',
    image: '/images/asset_3.png',
    animation: '/images/门户网站.gif',
  },
};


function CasePage() {
  const { id } = useParams();
  const caseDetail = caseDetails[id];

  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    // 模拟发送邮件
    console.log('表单数据:', values);
    message.success('您的信息已提交，我们会尽快与您联系。');
    form.resetFields();
  };

  if (!caseDetail) {
    return (
      <Layout>
        <Header />
        <Content style={{ padding: '100px 50px', textAlign: 'center' }}>
          <Card>
            <Title level={2}>未找到对应的案例</Title>
            <Link to="/">
              <Button type="primary" icon={<ArrowLeftOutlined />}>
                返回主页
              </Button>
            </Link>
          </Card>
        </Content>
        <Footer />
      </Layout>
    );
  }

  return (
    <div className="home-page">
      <Header key="header" />
      <Banner key="banner" />

      <Content style={{ padding: '50px', maxWidth: '1500px', margin: '0 auto' }}>
        <Card
          hoverable
          cover={
            <img
              alt={caseDetail.title}
              src={caseDetail.image}
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          }
          style={{ width: '100%', padding: '20px' }} // 设置宽度为 100%
        >
          <Space
            direction="vertical"
            size="small"
            style={{ width: '100%' }}
          >
            {/* 主标题 */}
            <Title level={1}>{caseDetail.title}</Title>

            {/* 描述文字和动画 */}
            <Row gutter={[16, 16]} align="middle">
              {/* 右侧列：动画 */}
              <Col xs={24} md={12} style={{ textAlign: 'center' }}>
                <img
                  alt="Animation"
                  src={caseDetail.animation} // 请替换为您的动画路径
                  style={{ width: '100%', maxWidth: '800px' }}
                />
              </Col>
              {/* 左侧列：描述文字 */}
              <Col xs={24} md={12}>
                <Text
                  style={{
                    fontSize: '1rem',
                    textAlign: 'left', // 确保文字左对齐
                    paddingRight: '20px',
                  }}
                >
                  {caseDetail.background}
                </Text>
              </Col>
            </Row>


            {/* 分割线 */}
            <Divider />

            {/* 功能介绍 */}
            <Title level={2}>功能介绍</Title>
            <ul style={{ paddingLeft: '0', textAlign: 'center', listStyleType: 'none' }}>
              {caseDetail.features.map((feature, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: '1rem',
                    marginBottom: '10px',
                  }}
                >
                  {feature}
                </li>
              ))}
            </ul>

            {/* 分割线 */}
            <Divider />

            {/* 服务价格和周期 & 联系表单 */}
            <div style={{ width: '100%', marginTop: '20px' }}>
              <Row gutter={[32, 32]}>
                {/* 左侧列：服务价格和周期 */}
                <Col xs={24} md={12}>
                  <Title level={2}>服务价格和周期</Title>
                  <div
                    style={{
                      backgroundColor: '#fafafa',
                      padding: '40px',
                      borderRadius: '8px',
                    }}
                  >
                    {/* 价格表 */}
                    <Row gutter={[20, 20]}>
                      {/* 软件费用 */}
                      <Col xs={24} sm={12}>
                        {/* 项目内容 */}
                        <div
                          style={{
                            padding: '20px',
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            backgroundColor: '#ffffff',
                            textAlign: 'center',
                          }}
                        >
                          <Title level={3}>软件费用</Title>
                          <Text
                            style={{
                              fontSize: '1.5rem',
                              fontWeight: 'bold',
                              color: '#fa8c16',
                            }}
                          >
                            {caseDetail.price}
                          </Text>
                          <Divider />
                          <ul
                            style={{
                              listStyleType: 'none',
                              padding: 0,
                              textAlign: 'left',
                            }}
                          >
                            <li>• 一次性购买，永久使用</li>
                            <li>• 基础技术支持</li>
                          </ul>
                        </div>
                      </Col>
                      {/* 运维服务费用 */}
                      <Col xs={24} sm={12}>
                        {/* 项目内容 */}
                        <div
                          style={{
                            padding: '20px',
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            backgroundColor: '#ffffff',
                            textAlign: 'center',
                          }}
                        >
                          <Title level={3}>运维服务费用</Title>
                          <Text
                            style={{
                              fontSize: '1.5rem',
                              fontWeight: 'bold',
                              color: '#52c41a',
                            }}
                          >
                            ¥200/月 起
                          </Text>
                          <Divider />
                          <ul
                            style={{
                              listStyleType: 'none',
                              padding: 0,
                              textAlign: 'left',
                            }}
                          >
                            <li>• 标准运维：¥200/月</li>
                            <li>• 高级运维：¥500/月</li>
                            <li>• 7x24 小时支持</li>
                          </ul>
                        </div>
                      </Col>
                      {/* 服务周期 */}
                      <Col xs={24} sm={12}>
                        {/* 项目内容 */}
                        <div
                          style={{
                            padding: '20px',
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            backgroundColor: '#ffffff',
                            textAlign: 'center',
                          }}
                        >
                          <Title level={3}>服务周期</Title>
                          <Text
                            style={{
                              fontSize: '1.5rem',
                              fontWeight: 'bold',
                              color: '#1890ff',
                            }}
                          >
                            灵活周期
                          </Text>
                          <Divider />
                          <ul
                            style={{
                              listStyleType: 'none',
                              padding: 0,
                              textAlign: 'left',
                            }}
                          >
                            <li>• 月度服务：按月支付，灵活方便</li>
                            <li>• 年度服务：一次性支付，享优惠</li>
                            <li>• 定制服务周期可协商</li>
                          </ul>
                        </div>
                      </Col>
                      {/* 新增项目 */}
                      <Col xs={24} sm={12}>
                        {/* 项目内容 */}
                        <div
                          style={{
                            padding: '20px',
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            backgroundColor: '#ffffff',
                            textAlign: 'center',
                          }}
                        >
                          <Title level={3}>增值服务</Title>
                          <Text
                            style={{
                              fontSize: '1.5rem',
                              fontWeight: 'bold',
                              color: '#f5222d',
                            }}
                          >
                            ¥500 起
                          </Text>
                          <Divider />
                          <ul
                            style={{
                              listStyleType: 'none',
                              padding: 0,
                              textAlign: 'left',
                            }}
                          >
                            <li>• 定制开发</li>
                            <li>• 个性化支持</li>
                            <li>• 专属顾问服务</li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>

                {/* 右侧列：联系我们 */}
                <Col xs={24} md={12}>
                  <div id="contactForm">
                    <Title level={2}>联系我们</Title>
                    <Form
                      form={form}
                      layout="vertical"
                      onFinish={handleSubmit}
                      style={{ width: '100%' }}
                    >
                      <Form.Item
                        label="姓名"
                        name="name"
                        rules={[{ required: true, message: '请输入您的姓名' }]}
                      >
                        <Input
                          placeholder="请输入您的姓名"
                          size="large"
                          style={{ borderRadius: '4px' }}
                        />
                      </Form.Item>
                      <Form.Item
                        label="电话"
                        name="phone"
                        rules={[{ required: true, message: '请输入您的电话' }]}
                      >
                        <Input
                          placeholder="请输入您的电话"
                          size="large"
                          style={{ borderRadius: '4px' }}
                        />
                      </Form.Item>
                      <Form.Item
                        label="工作邮箱"
                        name="email"
                        rules={[
                          { required: true, message: '请输入您的工作邮箱' },
                          { type: 'email', message: '请输入有效的邮箱地址' },
                        ]}
                      >
                        <Input
                          placeholder="请输入您的工作邮箱"
                          size="large"
                          style={{ borderRadius: '4px' }}
                        />
                      </Form.Item>

                      {/* /!* 新增输入框：公司 *!/ */}
                      {/* <Form.Item */}
                      {/*   label="公司" */}
                      {/*   name="company" */}
                      {/*   rules={[{ required: true, message: '请输入您的公司名称' }]} */}
                      {/* > */}
                      {/*   <Input */}
                      {/*     placeholder="请输入您的公司名称" */}
                      {/*     size="large" */}
                      {/*     style={{ borderRadius: '4px' }} */}
                      {/*   /> */}
                      {/* </Form.Item> */}

                      {/* /!* 新增输入框：城市 *!/ */}
                      {/* <Form.Item */}
                      {/*   label="城市" */}
                      {/*   name="city" */}
                      {/*   rules={[{ required: true, message: '请输入您所在的城市' }]} */}
                      {/* > */}
                      {/*   <Input */}
                      {/*     placeholder="请输入您所在的城市" */}
                      {/*     size="large" */}
                      {/*     style={{ borderRadius: '4px' }} */}
                      {/*   /> */}
                      {/* </Form.Item> */}

                      {/* 新增输入框：预算 */}
                      <Form.Item
                        label="预算"
                        name="budget"
                        rules={[{ required: true, message: '请输入您的预算' }]}
                      >
                        <Input
                          placeholder="请输入您的预算"
                          size="large"
                          style={{ borderRadius: '4px' }}
                        />
                      </Form.Item>

                      <Form.Item
                        label="描述"
                        name="description"
                        rules={[{ required: true, message: '请输入您的需求描述' }]}
                      >
                        <Input.TextArea
                          placeholder="请输入您的需求描述"
                          rows={4}
                          style={{ borderRadius: '4px' }}
                        />
                      </Form.Item>
                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          size="large"
                          style={{
                            width: '100%',
                            borderRadius: '4px',
                            backgroundColor: '#52c41a',
                            borderColor: '#52c41a',
                          }}
                        >
                          提交
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </Col>

              </Row>
            </div>

            <Divider />


            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Link to="/">
                <Button type="default" size="large" icon={<ArrowLeftOutlined />}>
                  返回主页
                </Button>
              </Link>
            </div>
          </Space>
        </Card>
      </Content>
      <Footer />
      <DocumentTitle title={`${caseDetail.title} - 上海洛哈纳网络科技有限公司`} />
    </div>
  );
}

export default CasePage;
