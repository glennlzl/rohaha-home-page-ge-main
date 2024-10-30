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
import { ArrowLeftOutlined, DollarOutlined, SettingOutlined, ClockCircleOutlined, CustomerServiceOutlined} from '@ant-design/icons';

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
    background:
      'ResourceHub 是一款企业资源管理平台，专注于物料、原料等资源的高效管理。随着企业供应链和生产流程的复杂性增加，管理和优化资源变得至关重要。ResourceHub 旨在通过全面的资源管理功能，帮助企业提升运营效率、降低成本并优化供应链管理。',
    description:
      '专注于物料、原料等资源的高效管理，帮助企业提升运营效率。',
    features: [
      '资源管理： 实时跟踪物料库存，确保资源准确记录。',
      '库存优化： 提供智能预测，合理规划采购和库存。',
      '供应链整合： 集成供应商管理，提升供应链效率。',
      '采购管理： 提供采购申请、审批等功能，规范流程。',
      '数据分析： 生成资源报告，支持数据驱动决策。',
      '自动警报： 设置库存警报，及时通知补货或调整。',
    ],
    price: '低至¥29999起',
    image: '/images/asset_4.png',
    animation: '/images/资源管理.gif',
    softwarePrice: [
      '一次性购买，永久使用',
      '基础技术支持',
      '支持产品试用，交付定金即可',
    ],
    maintainPrice: [
      '标准运维：提供常规支持，数据库容量有限，每年数据清理。',
      '高级运维：支持扩展容量，提升限制，每两年数据清理。',
      '7×24小时技术支持：全天候服务，确保系统稳定运行。',
    ],
  },
  2: {
    title: '企业人事管理平台',
    platform: 'PeopleFlow',
    background:
      'PeopleFlow 是一款专为企业设计的人事管理平台，旨在简化和优化人力资源管理。随着企业规模的扩大和人力资源需求的复杂化，企业需要一个全面的工具来管理员工信息、考勤、薪酬等方面的事务。PeopleFlow 提供了一整套解决方案，帮助企业提升人事管理效率和员工满意度。',
    description: '简化和优化人力资源管理，提高人事管理效率。',
    features: [
      '员工信息管理： 集中管理员工信息，支持快速更新。',
      '考勤管理： 提供考勤记录和排班安排，自动生成报表。',
      '薪酬管理： 处理薪资计算，支持自定义结构和福利。',
      '数据分析： 提供人力资源报告，支持数据决策。',
      '合规安全： 确保流程符合法规，提供数据加密和权限管理。',
    ],
    price: '低至¥9999起',
    image: '/images/asset_5.png',
    animation: '/images/人事管理.gif',
    softwarePrice: [
      '一次性购买，永久使用',
      '基础技术支持',
      '支持产品试用，交付定金即可',
    ],
    maintainPrice: [
      '标准运维：提供常规支持，数据库容量有限，每年数据清理。',
      '高级运维：支持扩展容量，提升限制，每两年数据清理。',
      '7×24小时技术支持：全天候服务，确保系统稳定运行。',
    ],
  },
  3: {
    title: '企业招聘管理平台',
    platform: 'RecruitMaster',
    background:
      'RecruitMaster 是一款专为企业设计的招聘管理平台，旨在优化招聘流程、提高招聘效率。随着企业对优秀人才的需求增加，传统招聘方式往往效率低下，RecruitMaster 提供了一整套数字化解决方案，帮助企业更好地管理招聘流程、筛选候选人并快速填补职位空缺。',
    description: '优化招聘流程、提高招聘效率的专业平台。',
    features: [
      '面试管理： 支持面试安排和反馈收集，优化流程。',
      '数据分析： 提供招聘数据，优化招聘策略。',
      '候选人沟通： 内置工具，支持自动消息发送。',
    ],
    price: '低至¥4999起步',
    image: '/images/asset_6.png',
    animation: '/images/招聘管理.gif',
    softwarePrice: [
      '一次性购买，永久使用',
      '基础技术支持',
      '支持产品试用，交付定金即可',
    ],
    maintainPrice: [
      '标准运维：提供常规支持，数据容量有限，每年数据清理。',
      '高级运维：支持扩展容量，提升限制，每两年数据清理。',
      '7×24小时技术支持：全天候服务，确保系统稳定运行。',
    ],
  },
  4: {
    title: '企业服务部署平台',
    platform: 'DeployPro',
    background:
      'DeployPro 是一款专为企业设计的服务部署平台，旨在简化和加速企业服务的部署过程。随着企业应用程序和服务的复杂性不断增加，传统的部署方式往往难以满足高效、可靠的部署需求。DeployPro 提供了一整套自动化和可视化的部署工具，帮助企业确保服务的快速上线和稳定运行。',
    description:
      '帮助企业简化和加速服务部署过程，确保服务的快速上线和稳定运行。',
    features: [
      '自动化部署： 全流程自动化，减少人为错误。',
      '多环境支持： 管理多环境部署，确保稳定运行。',
      '可视化管理： 提供部署流程监控，快速解决问题。',
      '版本控制与回滚： 支持版本管理，快速恢复稳定版本。',
      '配置管理： 集中管理配置，确保一致性。',
      '日志监控： 提供实时日志，提升部署可靠性。',
      '安全管理： 确保代码和数据安全，支持权限控制。',
      '集成与扩展： 支持与现有工具和云平台集成。',
    ],
    price: '低至¥9999起步',
    image: '/images/asset_7.png',
    animation: '/images/部署平台.gif',
    softwarePrice: [
      '一次性购买，永久使用',
      '包含初始配置和培训',
      '支持多环境流水线',
      '支持产品试用，交付定金即可',
    ],
    maintainPrice: [
      '标准运维：提供常规支持，适用于单一环境，每年系统优化。',
      '高级运维：支持多环境和定制需求，每两年系统升级。',
      '7×24小时技术支持：全天候服务，确保部署稳定性。',
    ],
  },
  5: {
    title: '企业人才测评系统',
    platform: 'TalentGauge',
    background:
      'TalentGauge 是一款专为企业设计的人才测评系统，旨在通过科学、全面的评估方法，帮助企业识别、选拔和培养优秀人才。在现代企业中，准确评估员工的能力、潜力和适配度对于招聘、晋升和发展规划至关重要。TalentGauge 提供了一整套测评工具和数据分析功能，助力企业做出更加明智的人才决策。',
    description: '帮助企业识别、选拔和培养优秀人才的测评系统。',
    features: [
      '多维度评估： 提供能力、性格等多方面测评工具。',
      '定制测评方案： 根据岗位要求定制测评内容。',
      '在线测试与报告： 支持在线测试，自动生成报告。',
      '数据分析与对比： 提供测评数据分析，支持决策。',
      '整合历史数据： 跟踪员工发展，为人才管理提供支持。',
      '安全与合规： 确保数据隐私和安全，符合法规。',
      '与HR系统集成： 无缝导入测评结果，提升管理效率。',
    ],
    price: '低至¥4999起步',
    image: '/images/asset_8.png',
    animation: '/images/人才.gif',
    softwarePrice: [
      '一次性购买，永久使用',
      '基础技术支持',
      '包含审批流程模块',
      '包含初始测评配置',
    ],
    maintainPrice: [
      '标准运维：提供常规支持，数据容量有限，每年更新模型。',
      '高级运维：支持定制模型，提升容量，每两年更新内容。',
      '7×24小时技术支持：全天候服务，确保系统稳定运行。',
    ],
  },
  6: {
    title: 'Blog搭建工具',
    platform: 'BlogMaster',
    background:
      'BlogMaster 是一款专为个人和企业设计的高效 Blog 搭建工具。随着内容营销和个人品牌的重要性日益提升，用户需要一个易于使用且功能强大的平台来展示自己的内容。BlogMaster 满足了这一需求，无需编程技能，用户就能快速创建和管理博客网站。',
    description:
      '这是一款高效便捷的Blog搭建工具，帮助用户快速创建和管理个人博客。',
    features: [
      '模板丰富： 提供多种风格模板，适合不同需求。',
      '拖拽式编辑： 支持拖拽编辑，所见即所得。',
      'SEO优化： 内置工具，提升搜索引擎排名。',
      '多平台发布： 支持同步发布到多个平台。',
      '数据分析： 提供访问统计，优化内容策略。',
    ],
    price: '低至¥1999起步',
    image: '/images/asset_1.png',
    animation: '/images/blog.gif',
    softwarePrice: [
      '一次性购买，永久使用',
      '基础技术支持',
      '包含静态网页设计与研发',
      '包含初始模板和主题',
    ],
    maintainPrice: [
      '标准运维：提供常规支持，年度更新和维护。',
      '高级运维：支持定制设计，每年网站优化。',
      '7×24小时技术支持：全天候服务，确保网站稳定。',
    ],
  },
  7: {
    title: '开发者工具集成平台',
    platform: 'DevSync',
    background:
      'DevSync 是一款专为开发者打造的工具集成平台，旨在简化开发流程，提高工作效率。随着技术栈的复杂化和开发需求的多样化，开发者需要一个集成多种开发工具的统一平台，以便高效地管理和协调各种开发任务。',
    description: '集成多种开发者工具的平台，提升开发效率，简化流程。',
    features: [
      '工具整合： 集成主流开发工具，提供统一界面。',
      '自动化工作流： 支持自动部署和测试，减少手动操作。',
      '团队协作： 提供任务分配和实时沟通功能。',
      '数据分析和报告： 跟踪项目进展，优化开发流程。',
    ],
    price: '按需收费',
    image: '/images/asset_2.png',
    animation: '/images/开发集成.gif',
    softwarePrice: [
      '定制方案，按需求定价',
      '包含初始配置和培训',
      '支持产品试用，签订合同即可',
    ],
    maintainPrice: [
      '标准运维：提供常规支持，定期更新插件，每年系统优化。',
      '高级运维：支持定制集成，持续更新，每两年系统升级。',
      '7×24小时技术支持：全天候服务，确保流程顺畅。',
    ],
  },
  8: {
    title: '企业门户网站搭建工具',
    platform: 'PortaPro',
    background:
      'PortaPro 是一款专为企业设计的门户网站搭建工具，旨在帮助企业快速建立功能全面、外观专业的企业门户网站。随着企业在线业务的扩展和品牌形象的重要性提升，PortaPro 提供了一站式解决方案，使企业能够轻松创建和管理其在线存在。',
    description:
      '帮助企业快速搭建专业的门户网站，支持多种模板和自定义功能。',
    features: [
      '专业模板： 提供多种企业级模板，满足行业需求。',
      '模块化设计： 支持添加功能模块，如新闻和产品展示。',
      '内容管理系统： 内置强大 CMS，轻松编辑发布内容。',
      '多语言支持： 提供多语言版本，面向全球市场。',
      '安全与权限管理： 提供数据加密，确保信息安全。',
      '数据分析： 实时监控流量，优化网站内容。',
    ],
    price: '低至¥1999',
    image: '/images/asset_3.png',
    animation: '/images/门户网站.gif',
    softwarePrice: [
      '一次性购买，永久使用',
      '基础技术支持',
      '包含静态网页设计和研发',
      '包含初始模板和页面设计',
    ],
    maintainPrice: [
      '标准运维：提供常规支持，年度更新和维护。',
      '高级运维：支持内容更新和功能扩展，每年网站改版。',
      '7×24小时技术支持：全天候服务，确保网站稳定运行。',
    ],
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

  const CenteredTitle = ({ level, children }) => (
    <Title level={level} style={{ textAlign: 'center' }}>
      {children}
    </Title>
  );

  return (
    <div className="home-page">
      <Header key="header" />
      <Banner key="banner" />

      <Content style={{ padding: '50px', maxWidth: '1500px', margin: '0 auto' }}>
        <Card
          hoverable
          // cover={
          //   <img
          //     alt={caseDetail.title}
          //     src={caseDetail.image}
          //     style={{ maxHeight: '400px', objectFit: 'cover' }}
          //   />
          // }
          style={{ width: '100%', padding: '20px' }} // 设置宽度为 100%
        >
          <Space
            direction="vertical"
            size="small"
            style={{ width: '100%' }}
          >
            {/* 主标题 */}
            <CenteredTitle level={1}>{caseDetail.title}</CenteredTitle>

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
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ul
                style={{
                  listStyleType: 'disc',
                  paddingLeft: '100px',
                  textAlign: 'left',
                  maxWidth: '550px',
                  width: '120%',
                }}
              >
                {caseDetail.features.map((feature, index) => {
                  const parts = feature.split('：');
                  const titlePart = parts[0] ? parts[0] + '：' : '';
                  const descriptionPart = parts[1] || '';

                  return (
                    <li
                      key={index}
                      style={{
                        fontSize: '1rem',
                        marginBottom: '10px',
                      }}
                    >
                      <Text>
                        <Text strong>{titlePart}</Text>
                        {descriptionPart}
                      </Text>
                    </li>
                  );
                })}
              </ul>
            </div>


            {/* 分割线 */}
            <Divider />

            {/* 服务价格和周期 & 联系表单 */}
            <div style={{ width: '100%', marginTop: '20px' }}>
              <Row gutter={[32, 32]}>
                {/* 左侧列：服务价格和周期 */}
                <Col xs={24} md={12}>
                  <Title level={2}>服务价格和周期</Title>
                  <Row gutter={[20, 20]}>
                    {/* 定义一个数组来存储卡片信息 */}
                    {[
                      {
                        title: '软件费用',
                        price: caseDetail.price,
                        color: '#fa8c16',
                        icon: <DollarOutlined style={{ fontSize: '2rem', color: '#fa8c16' }} />,
                        features: caseDetail.softwarePrice,
                      },
                      {
                        title: '运维费用',
                        price: '¥200/月 起',
                        color: '#52c41a',
                        icon: <SettingOutlined style={{ fontSize: '2rem', color: '#52c41a' }} />,
                        features: caseDetail.maintainPrice,
                      },
                      {
                        title: '服务周期',
                        price: '灵活周期',
                        color: '#1890ff',
                        icon: <ClockCircleOutlined style={{ fontSize: '2rem', color: '#1890ff' }} />,
                        features: [
                          '根据不同研发周期，我们提供不同的定制价格。对于比较着急的用户，我们提供紧急周期排布。详情联系我们',
                        ],
                      },
                      {
                        title: '客制化服务',
                        price: '定制开发',
                        color: '#f5222d',
                        icon: <CustomerServiceOutlined style={{ fontSize: '2rem', color: '#f5222d' }} />,
                        features: ['具体细节请联系我们'],
                      },
                    ].map((item, index) => (
                      <Col xs={24} sm={12} key={index}>
                        <Card
                          hoverable
                          style={{
                            minHeight: '350px',
                            height: '100%', // 确保卡片撑满列的高度
                            borderRadius: '10px',
                          }}
                          bodyStyle={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            padding: '20px',
                          }}
                        >
                          <div style={{ textAlign: 'center' }}>
                            {item.icon}
                            <Title level={3} style={{ marginTop: '10px' }}>
                              {item.title}
                            </Title>
                            <Text
                              style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                color: item.color,
                              }}
                            >
                              {item.price}
                            </Text>
                          </div>

                          {/* 加入 Divider 线条 */}
                          <Divider />

                          <div>
                            <ul
                              style={{
                                listStyleType: 'none',
                                padding: 0,
                                marginTop: '20px',
                              }}
                            >
                              {item.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  style={{
                                    marginBottom: '10px',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                  }}
                                >
                                  <span style={{ color: item.color, marginRight: '8px' }}>•</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Card>
                      </Col>
                    ))}
                  </Row>
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

                      {/* 新增输入框：公司 */}
                      <Form.Item
                        label="公司"
                        name="company"
                        rules={[{ required: true, message: '请输入您的公司名称' }]}
                      >
                        <Input
                          placeholder="请输入您的公司名称"
                          size="large"
                          style={{ borderRadius: '4px' }}
                        />
                      </Form.Item>

                      {/* 新增输入框：城市 */}
                      <Form.Item
                        label="城市"
                        name="city"
                        rules={[{ required: true, message: '请输入您所在的城市' }]}
                      >
                        <Input
                          placeholder="请输入您所在的城市"
                          size="large"
                          style={{ borderRadius: '4px' }}
                        />
                      </Form.Item>

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
