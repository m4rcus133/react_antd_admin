import React,{ useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox, Layout, Row, Col, Divider, Switch, Radio } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { login } from "@/redux/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "@/redux/auth/actions";
import { selectAuth } from "@/redux/auth/selectors";
// import { useThemeSwitcher } from "react-css-theme-switcher";
import useTranslation from "@/hooks/useTranslation";
import { useLanguageContext } from "@/context/locale/LanguageContext";
import SwitcherDarkMode from "@/components/SwitcherDarkMode";
const { Content, Footer } = Layout;

const LoginPage = () => {
  const t = useTranslation();
  const { language, changeLanguage } = useLanguageContext(localStorage.getItem('currentLanguage') || 'en');

  // const { switcher, themes, status, currentTheme } = useThemeSwitcher();
  // const [isDarkMode, setIsDarkMode] = useState(currentTheme === 'dark');
  

  // function toggleTheme(isChecked) { // added
  //     setIsDarkMode(isChecked);
  //     localStorage.setItem('isDarkMode', isChecked); 
  //     switcher({ theme: isChecked ? themes.dark : themes.light });
  // };
  
  function handleLanguageChange(e) {
    //setLanguege(e.target.value);
    changeLanguage(e.target.value)
    localStorage.setItem('currentLanguage', e.target.value); 
  }

  // const [error, setError] = useState();
  
  // const { setAdminData } = useContext(AdminContext);
  // const history = useHistory();
  const { loading: isLoading } = useSelector(selectAuth);
  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setInputs((inputs) => ({ ...inputs, [name]: value }));
  // }
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(login(values));
  };

  // if (status === "loading") {
  //   return null;
  // }
  
  return (
    <>
      <Layout className="layout" >
        <Row>
          <Col xs={{ span: 24}} lg={{ span: 12, offset: 6 }}>
            <Content
              style={{
                padding: "100px 20px 10px 20px",
                maxWidth: "360px",
                minWidth: "330px",
                margin: "0 auto",
              }}
            >
              <div className='logo'>
                <img alt="logo" src='/logo192.png' />
                <span>React Application</span>
              </div>
              
              <Divider />
              <div className="site-layout-content">
                {" "}
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: t.login_username_msg,
                      },
                    ]}
                    hasFeedback
                  >
                    <Input
                      size="large"
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder={t.username}
                      autoComplete="off"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: t.login_password_msg,
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password
                      size="large"
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder={t.password}
                      autoComplete="off"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>{t.remember_me}</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                      {t.forgot_password}
                    </a>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      size="large"
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      loading={isLoading}
                    >
                      {t.login}
                    </Button>
                    {/* Or <a href="">register now!</a> */}
                  </Form.Item>
                </Form>
              </div>
              <Divider />
              <div style={{float:"left"}}>
                <Radio.Group value={language} onChange={handleLanguageChange}>
                  <Radio.Button value="en">English</Radio.Button>
                  <Radio.Button value="zh">中文</Radio.Button>
                  <Radio.Button value="ms">Malay</Radio.Button>
                  {/* <Radio.Button value="small">MalayMalay</Radio.Button> */}
                </Radio.Group>
              </div>
              <div className="login-form-forgot">
                <SwitcherDarkMode />
              </div>
            </Content>
          </Col>
        </Row>

        <div className='footer'>
          <Footer ></Footer>
        </div> 
      </Layout>
    </>
  );
};


export default LoginPage;
