import { LeftNavigation } from '../components/nav/LeftNavigation'
import Widget from '../components/widget'
import { Input, Label, HelperText, Select, Radio } from '@windmill/react-ui'

export default function Home() {
    return (
        <div className="flex bg-gray-50">
            <LeftNavigation selected='Form' />
            <div className="bg-gray-50 text-gray-800 min-w-full pl-64 pt-16 w-full ml-4 mr-4">
                <Widget title="Form" description={<span>Default form styles</span>}>
                    <form>
                        <Label>
                            <Input type="text" />
                            <HelperText>Password should have more than 6 characters</HelperText>
                        </Label>
                        <Label>
                            <Input type="password" valid />
                            <HelperText valid>Your password is strong</HelperText>
                        </Label>
                        <Label>
                            <Input type="text" valid={false} />
                            <HelperText valid={false}>Provide a valid email</HelperText>
                        </Label>
                        <Input type="checkbox" />
                        <br />
                        <Input type="checkbox" checked />
                        <div>
                            <Label check>
                                <Input type="checkbox" />
                                <span className="ml-2">Go to Label to read more</span>
                            </Label>
                        </div>
                        <Label>
                            <span>Requested Limit</span>
                            <Select className="mt-1">
                                <option>$1,000</option>
                                <option>$5,000</option>
                            </Select>
                        </Label>
                        <Input type="radio" />
                        <br />
                        <Input type="radio" checked />
                        <div>
                            <Label radio>
                                <Input type="radio" />
                                <span className="ml-2">Go to Label to read more</span>
                            </Label>
                        </div>
                    </form>
                </Widget>


            </div>
        </div>
    )
}
