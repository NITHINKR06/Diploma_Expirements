package com.hello.vikith;

public class company {
public int companyId;
public String companyAddress;
public int getCompanyId() {
	return companyId;
}
public void setCompanyId(int companyId) {
	this.companyId = companyId;
}
public company() {
	super();
	// TODO Auto-generated constructor stub
}
public String getCompanyAddress() {
	return companyAddress;
}
public void setCompanyAddress(String companyAddress) {
	this.companyAddress = companyAddress;
}
@Override
public String toString() {
	return "company [companyId=" + companyId + ", companyAddress=" + companyAddress + "]";
}
public company(int companyId, String companyAddress) {
	super();
	this.companyId = companyId;
	this.companyAddress = companyAddress;
}

}
