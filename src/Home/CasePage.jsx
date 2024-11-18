import React, { useEffect, useRef, useState } from 'react';
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
  Modal,
} from 'antd';
import Header from './Header';
import {
  ArrowLeftOutlined,
  DollarOutlined,
  SettingOutlined,
  ClockCircleOutlined,
  CustomerServiceOutlined,
} from '@ant-design/icons';
import Footer from './Footer';
import Banner from './Banner';
import DocumentTitle from 'react-document-title';
import axios from 'axios';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

// 完整的案例详情数据，包括企业产品和非企业产品
const caseDetails = {
  1: {
    title: '企业资源管理平台',
    platform: 'ResourceHub',
    background:
      'ResourceHub 是一款企业资源管理平台，专注于物料、原料等资源的高效管理。随着企业供应链和生产流程的复杂性增加，管理和优化资源变得至关重要。ResourceHub 旨在通过全面的资源管理功能，帮助企业提升运营效率、降低成本并优化供应链管理。',
    description:
      '专注于物料、原料等资源的高效管理，帮助企业提升运营效率。',
    features: [
      '资源管理： 实时跟踪和管理物料和原料库存，确保资源的准确记录和管理。',
      '库存优化： 提供智能预测和优化建议，帮助企业合理规划采购和库存，减少过剩和短缺情况。',
      '供应链整合： 集成供应商管理和订单跟踪功能，提升整体供应链效率。',
      '采购管理： 提供采购申请、审批、订单生成等功能，确保采购过程的规范和高效。',
      '数据分析： 生成资源使用和库存周转率报告，支持数据驱动的决策。',
      '自动警报： 设置库存阈值警报，及时通知相关人员进行补货或调整采购计划。',
    ],
    image: '/images/asset_4.png',
    animation: '/images/资源管理.gif',
    packages: [
      {
        title: '小团队套餐（1-10人）',
        price: '每月低至 300元/月 起',
        description:
          '适合初创团队或小型项目，提供平台的基础使用权限和标准数据报告，支持基本的功能管理。',
        monthlyPrice: 300,
        yearlyPrice: 270,
      },
      {
        title: '中团队套餐（11-50人）',
        price: '每月低至 1200元/月 起',
        description:
          '适合中型企业或快速成长的团队，提供更大存储空间、跨团队协作、高级数据分析功能，以及更多的权限管理和支持服务。',
        monthlyPrice: 1200,
        yearlyPrice: 1080,
      },
      {
        title: '大团队套餐（50人以上）',
        price: '每月低至 3000元/月 起',
        description:
          '专为大型企业设计，支持复杂的组织结构、海量数据管理、企业级协作工具和定制化开发服务，提供全面的技术支持和培训。',
        monthlyPrice: 3000,
        yearlyPrice: 2700,
      },
    ],
    customService:
      '根据具体功能或需求评估费用，支持跨平台多系统协同使用，按开发工时或功能模块收费，具体请右侧提交表单咨询客服；',
    isForEnterprise: true,
  },
  2: {
    title: '企业人事管理平台',
    platform: 'PeopleFlow',
    background:
      'PeopleFlow 是一款专为企业设计的人事管理平台，旨在简化和优化人力资源管理。随着企业规模的扩大和人力资源需求的复杂化，企业需要一个全面的工具来管理员工信息、考勤、薪酬等方面的事务。PeopleFlow 提供了一整套解决方案，帮助企业提升人事管理效率和员工满意度。',
    description: '简化和优化人力资源管理，提高人事管理效率。',
    features: [
      '员工信息管理： 集中管理员工信息和职位变动，支持数据的快速检索和更新，确保信息的准确性和完整性。',
      '考勤管理： 提供考勤记录和请假管理功能，支持自动生成考勤报表，帮助企业更好地管理员工的工作时间。',
      '薪酬管理： 处理薪资计算、工资单生成、税务计算等功能，支持自定义薪资结构，确保薪资发放的准确性。',
      '数据分析： 提供人力资源数据分析和报告，包括员工流动率、薪酬分析等，帮助企业做出数据驱动的决策。',
      '合规安全： 确保人事管理过程符合相关法律法规，提供数据加密和权限管理功能，保护员工信息的安全性。',
    ],
    image: '/images/asset_5.png',
    animation: '/images/人事管理.gif',
    packages: [
      {
        title: '小团队套餐（1-10人）',
        price: '每月低至 300元/月 起',
        description:
          '适合初创团队或小型项目，提供平台的基础使用权限和标准数据报告，支持基本的功能管理。',
        monthlyPrice: 300,
        yearlyPrice: 270,
      },
      {
        title: '中团队套餐（11-50人）',
        price: '每月低至 1200元/月 起',
        description:
          '适合中型企业或快速成长的团队，提供更大存储空间、跨团队协作、高级数据分析功能，以及更多的权限管理和支持服务。',
        monthlyPrice: 1200,
        yearlyPrice: 1080,
      },
      {
        title: '大团队套餐（50人以上）',
        price: '每月低至 3000元/月 起',
        description:
          '专为大型企业设计，支持复杂的组织结构、海量数据管理、企业级协作工具和定制化开发服务，提供全面的技术支持和培训。',
        monthlyPrice: 3000,
        yearlyPrice: 2700,
      },
    ],
    customService:
      '根据具体功能或需求评估费用，支持跨平台多系统协同使用，按开发工时或功能模块收费，具体请右侧提交表单咨询客服；',
    isForEnterprise: true,
  },
  3: {
    title: '企业招聘管理平台',
    platform: 'RecruitMaster',
    background:
      'RecruitMaster 是一款专为企业设计的招聘管理平台，旨在优化招聘流程、提高招聘效率。随着企业对优秀人才的需求增加，传统招聘方式往往效率低下，RecruitMaster 提供了一整套数字化解决方案，帮助企业更好地管理招聘流程、筛选候选人并快速填补职位空缺。',
    description: '优化招聘流程、提高招聘效率的专业平台。',
    features: [
      '面试管理： 支持面试安排、反馈收集和面试记录管理，优化面试流程，提升面试效率和候选人体验。',
      '数据分析： 提供招聘渠道效果、职位填补时间、候选人来源等数据分析，帮助企业优化招聘策略。',
      '候选人沟通： 内置沟通工具，支持自动化邮件和消息发送，提升候选人体验和沟通效率。',
    ],
    image: '/images/asset_6.png',
    animation: '/images/招聘管理.gif',
    packages: [
      {
        title: '小团队套餐（1-10人）',
        price: '每月低至 300元/月 起',
        description:
          '适合初创团队或小型项目，提供平台的基础使用权限和标准数据报告，支持基本的功能管理。',
        monthlyPrice: 300,
        yearlyPrice: 270,
      },
      {
        title: '中团队套餐（11-50人）',
        price: '每月低至 1200元/月 起',
        description:
          '适合中型企业或快速成长的团队，提供更大存储空间、跨团队协作、高级数据分析功能，以及更多的权限管理和支持服务。',
        monthlyPrice: 1200,
        yearlyPrice: 1080,
      },
      {
        title: '大团队套餐（50人以上）',
        price: '每月低至 3000元/月 起',
        description:
          '专为大型企业设计，支持复杂的组织结构、海量数据管理、企业级协作工具和定制化开发服务，提供全面的技术支持和培训。',
        monthlyPrice: 3000,
        yearlyPrice: 2700,
      },
    ],
    customService:
      '根据具体功能或需求评估费用，支持跨平台多系统协同使用，按开发工时或功能模块收费，具体请右侧提交表单咨询客服；',
    isForEnterprise: true,
  },
  4: {
    title: '企业服务部署平台',
    platform: 'DeployPro',
    background:
      'DeployPro 是一款专为企业设计的服务部署平台，旨在简化和加速企业服务的部署过程。随着企业应用程序和服务的复杂性不断增加，传统的部署方式往往难以满足高效、可靠的部署需求。DeployPro 提供了一整套自动化和可视化的部署工具，帮助企业确保服务的快速上线和稳定运行。',
    description:
      '帮助企业简化和加速服务部署过程，确保服务的快速上线和稳定运行。',
    features: [
      '自动化部署： 支持从代码打包、测试到上线的自动化部署流程，减少人为操作错误。',
      '多环境支持： 提供开发、测试、生产等多环境的部署管理，确保服务在不同环境下的顺利切换和稳定运行。',
      '可视化管理： 提供部署流程和状态的可视化监控界面，帮助运维团队实时跟踪部署进度，快速发现和解决问题。',
      '配置管理： 集中管理服务的配置文件，支持配置变更的自动应用和同步，确保各环境配置的一致性。',
      '日志监控： 提供实时日志收集和监控功能，帮助团队快速定位和解决部署中的问题，提升部署可靠性。',
      '安全管理： 提供安全的部署管道，确保代码和数据在部署过程中的安全性，支持权限控制和审计日志。',
      '集成与扩展： 支持与现有的 CI/CD 工具、代码库、云平台的无缝集成，满足不同规模企业的需求。',
    ],
    image: '/images/asset_7.png',
    animation: '/images/部署平台.gif',
    packages: [
      {
        title: '小团队套餐（1-10人）',
        price: '每月低至 500元/月 起',
        description:
          '适合初创团队或小型项目，提供平台的基础使用权限和标准数据报告，支持基本的功能管理。',
        monthlyPrice: 500,
        yearlyPrice: 450,
      },
      {
        title: '中团队套餐（11-50人）',
        price: '每月低至 2000元/月 起',
        description:
          '适合中型企业或快速成长的团队，提供更大存储空间、跨团队协作、高级数据分析功能，以及更多的权限管理和支持服务。',
        monthlyPrice: 2000,
        yearlyPrice: 1800,
      },
      {
        title: '大团队套餐（50人以上）',
        price: '每月低至 5000元/月 起',
        description:
          '专为大型企业设计，支持复杂的组织结构、海量数据管理、企业级协作工具和定制化开发服务，提供全面的技术支持和培训。',
        monthlyPrice: 5000,
        yearlyPrice: 4500,
      },
    ],
    customService:
      '根据具体功能或需求评估费用，支持跨平台多系统协同使用，按开发工时或功能模块收费，具体请右侧提交表单咨询客服；',
    isForEnterprise: true,
  },
  5: {
    title: '企业人才测评系统',
    platform: 'TalentGauge',
    background:
      'TalentGauge 是一款专为企业设计的人才测评系统，旨在通过科学、全面的评估方法，帮助企业识别、选拔和培养优秀人才。在现代企业中，准确评估员工的能力、潜力和适配度对于招聘、晋升和发展规划至关重要。TalentGauge 提供了一整套测评工具和数据分析功能，助力企业做出更加明智的人才决策。',
    description: '帮助企业识别、选拔和培养优秀人才的全面测评系统。',
    features: [
      '多维度评估： 提供能力、性格、职业兴趣等多维度的测评工具，帮助企业全方位了解员工或候选人的素质。',
      '定制化测评方案： 根据企业的行业特点和岗位要求，定制测评内容和指标，确保评估结果的针对性和准确性。',
      '在线测试与报告： 提供在线测评平台，员工或候选人可以随时进行测试，系统自动生成详细的评估报告。',
      '数据分析与对比： 提供数据分析功能，支持横向对比不同候选人的测评结果，帮助企业做出更科学的决策。',
      '整合历史数据： 支持整合员工的历史评估数据，跟踪员工的成长和发展路径，为人才管理提供数据支持。',
      '安全与合规： 确保测评数据的隐私和安全，符合相关的法律法规，支持数据加密和权限管理。',
      '与HR系统集成： 无缝集成现有的人力资源管理系统，支持测评结果的导入和使用，提升整体人力资源管理效率。',
    ],
    image: '/images/asset_8.png',
    animation: '/images/人才.gif',
    packages: [
      {
        title: '小团队套餐（1-10人）',
        price: '每月低至 500元/月 起',
        description:
          '适合初创团队或小型项目，提供平台的基础使用权限和标准数据报告，支持基本的功能管理。',
        monthlyPrice: 500,
        yearlyPrice: 450,
      },
      {
        title: '中团队套餐（11-50人）',
        price: '每月低至 2000元/月 起',
        description:
          '适合中型企业或快速成长的团队，提供更大存储空间、跨团队协作、高级数据分析功能，以及更多的权限管理和支持服务。',
        monthlyPrice: 2000,
        yearlyPrice: 1800,
      },
      {
        title: '大团队套餐（50人以上）',
        price: '每月低至 5000元/月 起',
        description:
          '专为大型企业设计，支持复杂的组织结构、海量数据管理、企业级协作工具和定制化开发服务，提供全面的技术支持和培训。',
        monthlyPrice: 5000,
        yearlyPrice: 4500,
      },
    ],
    customService:
      '根据具体功能或需求评估费用，支持跨平台多系统协同使用，按开发工时或功能模块收费，具体请右侧提交表单咨询客服；',
    isForEnterprise: true,
  },
  6: {
    title: 'Blog搭建工具',
    platform: 'BlogMaster',
    background:
      'BlogMaster 是一款专为个人和企业设计的高效 Blog 搭建工具。随着内容营销和个人品牌的重要性日益提升，用户需要一个易于使用且功能强大的平台来展示自己的内容。BlogMaster 满足了这一需求，无需编程技能，用户就能快速创建和管理博客网站。',
    description:
      '这是一款高效便捷的Blog搭建工具，帮助用户快速创建和管理个人博客。',
    features: [
      '模板丰富： 提供多种风格的博客模板，适合不同领域和审美需求，用户可根据自己的喜好自由选择和定制。',
      '拖拽式编辑： 支持拖拽式页面编辑，用户可以轻松地添加、调整和删除内容模块，所见即所得，提升搭建效率。',
      'SEO优化： 内置 SEO 工具，帮助用户优化博客内容，提升在搜索引擎中的排名，吸引更多访问者。',
      '多平台发布： 支持将博客内容同步发布到多个平台，如社交媒体和内容聚合平台，扩大内容传播范围。',
      '数据分析： 提供详尽的访问数据统计和分析，帮助用户了解读者行为，优化内容策略。',
    ],
    price: '低至¥1999起步',
    image: '/images/asset_1.png',
    animation: '/images/blog.gif',
    softwarePrice: [
      '一次性购买，永久使用',
      '基础技术支持',
      '包含静态网页的设计与研发',
      '包含初始模板和主题',
    ],
    maintainPrice: [
      '标准运维：提供常规的运维支持，年度系统更新和安全维护。',
      '高级运维：支持定制化设计和功能扩展，每年提供一次网站优化。',
      '7×24小时技术支持：全天候提供技术支持，确保网站稳定运行。',
    ],
    isForEnterprise: false, // 非企业产品
  },
  7: {
    title: '开发者工具集成平台',
    platform: 'DevSync',
    background:
      'DevSync 是一款专为开发者打造的工具集成平台，旨在简化开发流程，提高工作效率。随着技术栈的复杂化和开发需求的多样化，开发者需要一个集成多种开发工具的统一平台，以便高效地管理和协调各种开发任务。',
    description: '集成多种开发者工具的平台，提升开发效率，简化工作流程。',
    features: [
      '工具整合： 集成了主流的开发工具和服务，包括代码编辑器、版本控制、项目管理等，提供统一的操作界面。',
      '自动化工作流： 支持自动化任务和工作流，例如自动部署、代码审查和测试，减少手动操作，提升开发效率。',
      '团队协作： 内置团队协作功能，如任务分配、进度跟踪和实时沟通，帮助团队成员更好地协作和共享信息。',
      '数据分析和报告： 提供开发过程中的数据统计和报告，帮助用户跟踪项目进展、分析瓶颈，优化开发流程。',
    ],
    image: '/images/asset_2.png',
    animation: '/images/开发集成.gif',
    packages: [
      {
        title: '小团队套餐（1-10人）',
        price: '每月低至 500元/月 起',
        description:
          '适合初创团队或小型项目，提供平台的基础使用权限和标准数据报告，支持基本的功能管理。',
        monthlyPrice: 500,
        yearlyPrice: 450,
      },
      {
        title: '中团队套餐（11-50人）',
        price: '每月低至 2000元/月 起',
        description:
          '适合中型企业或快速成长的团队，提供更大存储空间、跨团队协作、高级数据分析功能，以及更多的权限管理和支持服务。',
        monthlyPrice: 2000,
        yearlyPrice: 1800,
      },
      {
        title: '大团队套餐（50人以上）',
        price: '每月低至 5000元/月 起',
        description:
          '专为大型企业设计，支持复杂的组织结构、海量数据管理、企业级协作工具和定制化开发服务，提供全面的技术支持和培训。',
        monthlyPrice: 5000,
        yearlyPrice: 4500,
      },
    ],
    customService:
      '根据具体功能或需求评估费用，支持跨平台多系统协同使用，按开发工时或功能模块收费，具体请右侧提交表单咨询客服；',
    isForEnterprise: true,
  },
  8: {
    title: '企业门户网站搭建工具',
    platform: 'PortaPro',
    background:
      'PortaPro 是一款专为企业设计的门户网站搭建工具，旨在帮助企业快速建立功能全面、外观专业的企业门户网站。随着企业在线业务的扩展和品牌形象的重要性提升，PortaPro 提供了一站式解决方案，使企业能够轻松创建和管理其在线存在。',
    description:
      '帮助企业快速搭建专业的门户网站，支持多种模板和自定义功能。',
    features: [
      '专业模板： 提供多种企业级网站模板，涵盖行业特定需求，用户可以根据企业的品牌形象选择和定制模板。',
      '模块化设计： 支持模块化网站构建，用户可以根据需要添加和配置各种功能模块，如新闻发布等。',
      '内容管理系统： 内置强大的内容管理系统，允许用户轻松编辑和发布网站内容，无需技术背景即可操作。',
      '多语言支持： 支持多语言版本，帮助企业面向全球市场，提供本地化的用户体验。',
      '安全与权限管理： 提供先进的安全性功能，包括数据加密和权限管理，确保企业信息和用户数据的安全。',
      '数据分析： 内置数据分析工具，实时监控网站流量和用户行为，帮助企业优化网站内容和结构，提高用户体验。',
    ],
    price: '低至¥1999',
    image: '/images/asset_3.png',
    animation: '/images/门户网站.gif',
    softwarePrice: [
      '一次性购买，永久使用',
      '基础技术支持',
      '包含静态网页的设计和研发',
      '包含初始模板和页面设计',
    ],
    maintainPrice: [
      '标准运维：提供常规的运维支持，年度系统更新和安全维护。',
      '高级运维：支持网站内容更新、功能扩展和SEO优化，每年提供一次网站改版。',
      '7×24小时技术支持：全天候提供技术支持，确保网站稳定运行。',
    ],
    isForEnterprise: false, // 非企业产品
  },
};

function CasePage() {
  const { id } = useParams();
  const caseDetail = caseDetails[id];

  const [form] = Form.useForm();
  const mainTitleRef = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);
  const [showQRCode, setShowQRCode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validateCodeSent, setValidateCodeSent] = useState(false);
  const [validateCode, setValidateCode] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePurchaseClick = (selectedPackage = null) => {
    setSelectedPackage(selectedPackage);
    if (isLoggedIn) {
      if (caseDetail.isForEnterprise && selectedPackage) {
        // 企业用户且选择了套餐，打开选择支付方式的弹窗
        setIsModalVisible(true);
        setShowQRCode(false);
      } else if (!caseDetail.isForEnterprise) {
        // 非企业用户，直接显示二维码
        setIsModalVisible(true);
        setShowQRCode(true);
      }
    } else {
      // 未登录，打开登录弹窗
      setIsLoginModalVisible(true);
    }
  };

  const handleSelectPayment = (option) => {
    setSelectedPaymentOption(option);
    setShowQRCode(true);
  };

  const handleSendValidateCode = async () => {
    if (!phoneNumber) {
      message.error('请输入手机号');
      return;
    }
    setLoginLoading(true);
    try {
      const response = await axios.post(
        'http://106.54.213.250:8080/sms/sendSms',
        { phoneNumber },
        {
          withCredentials: true,
        }
      );
      if (response.data.isSuccess) {
        message.success('验证码已发送');
        setValidateCodeSent(true);
      } else {
        message.error(response.data.errMsg || '发送验证码失败');
      }
    } catch (error) {
      console.error(error);
      message.error('发送验证码失败');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleValidateCode = async () => {
    if (!validateCode) {
      message.error('请输入验证码');
      return;
    }
    setLoginLoading(true);
    try {
      const response = await axios.post(
        'http://106.54.213.250:8080/sms/validateSms',
        {
          phoneNumber,
          validateCode,
        },
        {
          withCredentials: true,
        }
      );
      if (response.data.isSuccess) {
        message.success('登录成功');
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('phoneNumber', phoneNumber); // 新增这行
        setIsLoginModalVisible(false);

        // 登录成功后，根据产品类型决定下一步
        if (caseDetail.isForEnterprise && selectedPackage) {
          // 企业用户且选择了套餐，打开选择支付方式的弹窗
          setIsModalVisible(true);
          setShowQRCode(false);
        } else if (!caseDetail.isForEnterprise) {
          // 非企业用户，直接显示二维码
          setIsModalVisible(true);
          setShowQRCode(true);
        }
      } else {
        message.error(response.data.errMsg || '验证码错误');
      }
    } catch (error) {
      console.error(error);
      message.error('验证码错误');
    } finally {
      setLoginLoading(false);
    }
  };

  useEffect(() => {
    if (mainTitleRef.current) {
      mainTitleRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

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

  // 使用 React.forwardRef 来创建可以接受 ref 的组件
  const CenteredTitle = React.forwardRef(({ level, children }, ref) => (
    <Title ref={ref} level={level} style={{ textAlign: 'center' }}>
      {children}
    </Title>
  ));

  return (
    <div className="home-page">
      <Header key="header" />
      <Banner key="banner" />

      <Content style={{ padding: '50px', maxWidth: '1500px', margin: '0 auto' }}>
        <Card
          hoverable
          style={{ width: '100%', padding: '20px' }} // 设置宽度为 100%
        >
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            {/* 主标题，传递 ref */}
            <CenteredTitle ref={mainTitleRef} level={1}>
              {caseDetail.title}
            </CenteredTitle>

            {/* 描述文字和动画 */}
            <Row gutter={[32, 32]} align="middle">
              {/* 图片列 */}
              <Col xs={24} md={16} style={{ textAlign: 'center' }}>
                <img
                  alt="Animation"
                  src={caseDetail.animation}
                  style={{
                    width: '100%',
                    borderRadius: '10px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </Col>

              {/* 描述文字列 */}
              <Col xs={24} md={8}>
                <Paragraph
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    textAlign: 'left',
                  }}
                >
                  {caseDetail.background}
                </Paragraph>
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
                  maxWidth: '900px',
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

            {/* 服务套餐和联系表单 */}
            <div style={{ width: '100%', marginTop: '20px' }}>
              <Row gutter={[32, 32]}>
                {/* 左侧列：服务套餐 */}
                <Col xs={24} md={12}>
                  <Title level={2}>服务套餐</Title>
                  <Row gutter={[20, 20]}>
                    {/* 判断是否为企业产品并有套餐 */}
                    {caseDetail.isForEnterprise && caseDetail.packages && caseDetail.packages.length > 0 ? (
                      caseDetail.packages.map((item, index) => (
                        <Col xs={24} sm={12} key={index}>
                          <Card
                            hoverable
                            style={{
                              minHeight: '350px',
                              height: '100%',
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
                              <Title level={3} style={{ marginTop: '10px' }}>
                                {item.title}
                              </Title>
                              <Text
                                style={{
                                  fontSize: '1.5rem',
                                  fontWeight: 'bold',
                                  color: '#fa8c16',
                                }}
                              >
                                {item.price}
                              </Text>
                            </div>

                            {/* 加入 Divider 线条 */}
                            <Divider />

                            <div>
                              <Paragraph>{item.description}</Paragraph>
                            </div>

                            {/* 添加购买按钮 */}
                            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                              <Button
                                type="primary"
                                style={{
                                  backgroundColor: '#fa8c16',
                                  borderColor: '#fa8c16',
                                }}
                                onClick={() => handlePurchaseClick(item)}
                              >
                                购买
                              </Button>
                            </div>
                          </Card>
                        </Col>
                      ))
                    ) : (
                      // 非企业产品，展示原有的价格卡片
                      <React.Fragment>
                        {/* 定义一个数组来存储卡片信息 */}
                        {[
                          {
                            title: '软件费用',
                            price: caseDetail.price,
                            color: '#fa8c16',
                            features: caseDetail.softwarePrice,
                          },
                          {
                            title: '运维费用',
                            price: '¥200/月 起',
                            color: '#52c41a',
                            features: caseDetail.maintainPrice,
                          },
                          {
                            title: '服务周期',
                            price: '灵活周期',
                            color: '#1890ff',
                            features: [
                              '根据不同研发周期，我们提供不同的定制价格。对于比较着急的用户，我们提供紧急周期排布。详情联系我们',
                            ],
                          },
                          {
                            title: '定制服务',
                            price: '请联系我们',
                            color: '#f5222d',
                            features: ['根据具体功能或需求评估费用，支持跨平台多系统协同使用，按开发工时或功能模块收费，具体请右侧提交表单咨询客服；'],
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
                                <Title level={3} style={{ marginTop: '10px' }}>
                                  {item.title}
                                </Title>
                                {item.price && (
                                  <Text
                                    style={{
                                      fontSize: '1.5rem',
                                      fontWeight: 'bold',
                                      color: item.color,
                                    }}
                                  >
                                    {item.price}
                                  </Text>
                                )}
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
                                      <span
                                        style={{ color: item.color, marginRight: '8px' }}
                                      >
                                        •
                                      </span>
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* 添加购买按钮 */}
                              {item.title === '软件费用' && (
                                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                  <Button
                                    type="primary"
                                    style={{
                                      backgroundColor: item.color,
                                      borderColor: item.color,
                                    }}
                                    onClick={() => handlePurchaseClick()}
                                  >
                                    购买
                                  </Button>
                                </div>
                              )}
                            </Card>
                          </Col>
                        ))}
                      </React.Fragment>
                    )}
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
              <Link to="/#page2">
                <Button type="default" size="large" icon={<ArrowLeftOutlined />}>
                  返回主页
                </Button>
              </Link>
            </div>

            {/* 添加购买弹窗 */}
            <Modal
              title="购买"
              visible={isModalVisible}
              onCancel={() => {
                setIsModalVisible(false);
                setShowQRCode(false);
                setSelectedPaymentOption(null);
              }}
              footer={null}
            >
              {showQRCode ? (
                <React.Fragment>
                  <Paragraph style={{ textAlign: 'center' }}>
                    请使用微信扫描下方二维码进行支付
                  </Paragraph>
                  <div style={{ textAlign: 'center' }}>
                    <img
                      src={'/images/qr.png'}
                      alt="支付二维码"
                      style={{ width: '256px', height: '256px' }}
                    />
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Paragraph style={{ textAlign: 'center' }}>
                    购买完成后您将收到平台的管理员账号密码以及说明手册，当前有以下两种支付方式可供选择
                  </Paragraph>
                  <Space
                    direction="vertical"
                    style={{ width: '100%' }}
                    size="large"
                  >
                    {caseDetail.isForEnterprise && selectedPackage && (
                      <React.Fragment>
                        <Row align="middle">
                          <Col flex="none" style={{ paddingRight: '10px' }}>
                            <Text style={{ fontSize: '1rem' }}>○</Text>
                          </Col>
                          <Col flex="auto">
                            <Text>
                              按月支付：¥{selectedPackage.monthlyPrice}/月。
                            </Text>
                          </Col>
                          <Col>
                            <Button
                              type="primary"
                              onClick={() => handleSelectPayment('monthly')}
                            >
                              选择
                            </Button>
                          </Col>
                        </Row>
                        <Row align="middle">
                          <Col flex="none" style={{ paddingRight: '10px' }}>
                            <Text style={{ fontSize: '1rem' }}>○</Text>
                          </Col>
                          <Col flex="auto">
                            <Text>
                              购买1年（9折）：¥{selectedPackage.yearlyPrice}/月。
                            </Text>
                          </Col>
                          <Col>
                            <Button
                              type="primary"
                              onClick={() => handleSelectPayment('yearly')}
                            >
                              选择
                            </Button>
                          </Col>
                        </Row>
                      </React.Fragment>
                    )}
                    {!caseDetail.isForEnterprise && (
                      <Row align="middle">
                        <Col flex="none" style={{ paddingRight: '10px' }}>
                          <Text style={{ fontSize: '1rem' }}>○</Text>
                        </Col>
                        <Col flex="auto">
                          <Text>一次性购买：¥{caseDetail.price}/次。</Text>
                        </Col>
                        <Col>
                          <Button
                            type="primary"
                            onClick={() => handleSelectPayment('one-time')}
                          >
                            选择
                          </Button>
                        </Col>
                      </Row>
                    )}
                  </Space>
                </React.Fragment>
              )}
            </Modal>

            {/* 添加登录弹窗 */}
            <Modal
              title="登录"
              visible={isLoginModalVisible}
              onCancel={() => {
                setIsLoginModalVisible(false);
                setPhoneNumber('');
                setValidateCode('');
                setValidateCodeSent(false);
              }}
              footer={null}
            >
              <Form layout="vertical">
                <Form.Item
                  label="手机号"
                  name="phoneNumber"
                  rules={[
                    { required: true, message: '请输入您的手机号' },
                    {
                      pattern: /^1[3-9]\d{9}$/,
                      message: '请输入有效的11位中国大陆手机号',
                    },
                  ]}
                >
                  <Input
                    placeholder="请输入您的手机号"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    disabled={validateCodeSent}
                  />
                </Form.Item>
                {validateCodeSent && (
                  <Form.Item
                    label="验证码"
                    name="validateCode"
                    rules={[{ required: true, message: '请输入验证码' }]}
                  >
                    <Input
                      placeholder="请输入您收到的验证码"
                      value={validateCode}
                      onChange={(e) => setValidateCode(e.target.value)}
                    />
                  </Form.Item>
                )}
                <Form.Item>
                  {validateCodeSent ? (
                    <div style={{ textAlign: 'center' }}>
                      <Button
                        type="primary"
                        onClick={handleValidateCode}
                        loading={loginLoading}
                        style={{ width: '100px' }}
                      >
                        登录
                      </Button>
                    </div>
                  ) : (
                    <div style={{ textAlign: 'center' }}>
                      <Button
                        type="primary"
                        onClick={handleSendValidateCode}
                        loading={loginLoading}
                        style={{ width: '150px' }}
                      >
                        发送验证码
                      </Button>
                    </div>
                  )}
                </Form.Item>
              </Form>
            </Modal>
          </Space>
        </Card>
      </Content>

      <Footer />
      <DocumentTitle title={`${caseDetail.title} - 上海洛哈纳网络科技有限公司`} />
    </div>
  );
}

export default CasePage;
