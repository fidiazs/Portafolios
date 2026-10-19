
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const ProfileAvatar = () => (
    <Avatar
        size={160}
        icon={<UserOutlined />}
        style={{
            backgroundColor: "#2563eb",
            border: "4px solid #60a5fa"
        }}
    />
);

export default ProfileAvatar;
